import { computed, ref } from 'vue'

const COOKIE_NAME = 'cookie_consent'

// Po roce se na souhlas ptáme znovu — viz Zásady používání cookies.
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365

const consent = ref(null)

function readCookie(name) {
  if (typeof document === 'undefined') return null

  const prefix = `${name}=`
  const entry = document.cookie
    .split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith(prefix))

  if (!entry) return null

  try {
    return decodeURIComponent(entry.slice(prefix.length))
  } catch {
    return null
  }
}

function readStoredConsent() {
  const raw = readCookie(COOKIE_NAME)
  if (!raw) return null

  // Uloženo jako "accepted|2026-08-14T06:43:37.058Z", aby byla cookie čitelná i v prohlížeči.
  const [value, savedAt = ''] = raw.split('|')
  if (value !== 'accepted' && value !== 'rejected') return null

  return { value, savedAt }
}

function storeConsent(value) {
  const record = { value, savedAt: new Date().toISOString() }
  consent.value = record

  if (typeof document === 'undefined') return

  const attributes = [
    `${COOKIE_NAME}=${encodeURIComponent(`${record.value}|${record.savedAt}`)}`,
    'path=/',
    `max-age=${COOKIE_MAX_AGE_SECONDS}`,
    'SameSite=Lax',
  ]

  if (window.location.protocol === 'https:') {
    attributes.push('Secure')
  }

  // Zápis může selhat, pokud má návštěvník cookies zakázané — volbu si pak držíme aspoň pro tuto relaci.
  document.cookie = attributes.join('; ')
}

consent.value = readStoredConsent()

export function useCookieConsent() {
  const hasDecided = computed(() => consent.value !== null)
  const isAccepted = computed(() => consent.value?.value === 'accepted')
  const isRejected = computed(() => consent.value?.value === 'rejected')
  const savedAt = computed(() => {
    if (!consent.value) return null

    const date = new Date(consent.value.savedAt)
    return Number.isNaN(date.getTime()) ? null : date
  })

  function accept() {
    storeConsent('accepted')
  }

  function reject() {
    storeConsent('rejected')
  }

  return { consent, hasDecided, isAccepted, isRejected, savedAt, accept, reject }
}
