import { nextTick, reactive, ref, watch } from 'vue'

const ENDPOINT = 'https://api.web3forms.com/submit'
const TIMEOUT_MS = 15000

// Písmena včetně diakritiky + mezera, spojovník, apostrof a tečka („Jan-Petr“, „O'Neil“, „van der Berg“).
const NAME_RE = /^\p{L}[\p{L}\p{M} '’.-]*$/u
const EMAIL_RE = /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[^\s@.]{2,}$/
const PHONE_RE = /^\+?\d{7,15}$/

/**
 * Pravidla podle typu pole. `max` se zároveň vystavuje jako `maxlength` v šabloně.
 * Chybové hlášky jsou klíče do i18n (`forms.errors.*`).
 */
export const FIELD_RULES = {
  name: {
    max: 50,
    clean: (v) => v.trim().replace(/\s+/g, ' '),
    check: (v) => (NAME_RE.test(v) ? null : 'forms.errors.name'),
  },
  email: {
    max: 254,
    clean: (v) => v.trim(),
    check: (v) => (EMAIL_RE.test(v) ? null : 'forms.errors.email'),
  },
  phone: {
    max: 25,
    // Mezery, závorky, tečky, lomítka a pomlčky uživatel může psát, odesíláme jen číslice (+ volitelné „+“).
    clean: (v) => v.trim().replace(/[\s().\/-]/g, ''),
    check: (v) => (PHONE_RE.test(v) ? null : 'forms.errors.phone'),
  },
  message: {
    min: 10,
    max: 5000,
    clean: (v) => v.trim(),
    check: (v) => (v.length >= 10 ? null : 'forms.errors.message'),
  },
  select: {
    clean: (v) => v,
    check: () => null,
  },
  consent: {},
}

const INSTANT_TYPES = ['select', 'consent']

/**
 * Společná logika formulářů odesílaných přes Web3Forms:
 * validace s přeloženými hláškami, honeypot proti botům, odeslání přes fetch
 * (uživatel zůstává na webu), ochrana proti dvojímu odeslání a stav úspěch/chyba.
 *
 * @param {object} options
 * @param {string} options.id         Prefix pro id chybových hlášek (unikátní na stránce).
 * @param {string} options.accessKey  Web3Forms access key.
 * @param {Record<string, {name: string, type: keyof FIELD_RULES, required?: boolean}>} options.fields
 *        Klíč = interní název pole, `name` = popisek, pod kterým pole dorazí v e-mailu.
 */
export function useWeb3Form({ id, accessKey, fields }) {
  const keys = Object.keys(fields)
  const initial = () =>
    Object.fromEntries(keys.map((k) => [k, fields[k].type === 'consent' ? false : '']))

  const values = reactive(initial())
  const errors = reactive({})
  const status = ref('idle') // idle | submitting | success | error
  const honeypot = ref(false)
  const touched = new Set()

  function validateField(key) {
    const { type, required = true } = fields[key]
    const rule = FIELD_RULES[type]
    let error = null

    if (type === 'consent') {
      if (required && !values[key]) error = 'forms.errors.consent'
    } else {
      const value = rule.clean(String(values[key] ?? ''))
      if (!value) {
        if (required) error = type === 'select' ? 'forms.errors.select' : 'forms.errors.required'
      } else if (rule.max && value.length > rule.max) {
        error = 'forms.errors.tooLong'
      } else {
        error = rule.check(value)
      }
    }

    if (error) errors[key] = error
    else delete errors[key]
    return !error
  }

  // Textová pole validujeme po opuštění (blur) a pak už průběžně; výběry a zaškrtávátka hned po změně.
  watch(
    () => ({ ...values }),
    (next, prev) => {
      for (const key of keys) {
        if (next[key] === prev[key]) continue
        const isInitial = next[key] === (fields[key].type === 'consent' ? false : '')
        if (touched.has(key) || (INSTANT_TYPES.includes(fields[key].type) && !isInitial)) {
          touched.add(key)
          validateField(key)
        }
      }
    },
  )

  function touch(key) {
    touched.add(key)
    validateField(key)
  }

  const errorId = (key) => `${id}-${key}-error`

  /** Atributy pro <input>/<select>/<textarea>: stav chyby, aria a blur. */
  function field(key) {
    const { type } = fields[key]
    const invalid = Boolean(errors[key])
    const attrs = {
      'aria-invalid': invalid ? 'true' : undefined,
      'aria-describedby': invalid ? errorId(key) : undefined,
      onBlur: () => touch(key),
    }
    if (FIELD_RULES[type]?.max) attrs.maxlength = FIELD_RULES[type].max
    if (type !== 'consent') {
      attrs.class = invalid
        ? 'border-red-500 focus:ring-red-500/30 focus:border-red-500'
        : 'border-[#383E42] focus:ring-[#f5a623] focus:border-[#f5a623]'
    }
    return attrs
  }

  function reset() {
    Object.assign(values, initial())
    for (const key of keys) delete errors[key]
    touched.clear()
    honeypot.value = false
  }

  function buildPayload() {
    const payload = { access_key: accessKey }
    for (const key of keys) {
      const { name, type } = fields[key]
      payload[name] =
        type === 'consent' ? (values[key] ? 'Ano' : 'Ne') : FIELD_RULES[type].clean(values[key])
    }
    return payload
  }

  async function submit(event) {
    if (status.value === 'submitting') return

    keys.forEach((k) => touched.add(k))
    const valid = keys.map(validateField).every(Boolean)
    if (!valid) {
      status.value = 'idle'
      await nextTick()
      event?.target?.querySelector?.('[aria-invalid="true"]')?.focus()
      return
    }

    // Vyplněný honeypot = bot. Tváříme se jako úspěch, ale nic neodesíláme.
    if (honeypot.value) {
      reset()
      status.value = 'success'
      return
    }

    status.value = 'submitting'
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(buildPayload()),
        signal: controller.signal,
      })
      const data = await response.json().catch(() => null)
      if (!response.ok || !data?.success) {
        throw new Error(data?.message || `HTTP ${response.status}`)
      }
      reset()
      status.value = 'success'
    } catch (err) {
      console.error('[form] Odeslání formuláře selhalo:', err)
      status.value = 'error'
    } finally {
      clearTimeout(timer)
    }
  }

  function startOver() {
    reset()
    status.value = 'idle'
  }

  return { values, errors, status, honeypot, field, errorId, submit, startOver }
}
