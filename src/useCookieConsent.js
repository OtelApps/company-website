import { computed, ref } from 'vue'

const STORAGE_KEY = 'cookie_consent'

// Po roce se na souhlas ptáme znovu — viz Zásady používání cookies.
const CONSENT_MAX_AGE_DAYS = 365

const consent = ref(null)

function readStoredConsent() {
  if (typeof window === 'undefined') return null

  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null

    const stored = JSON.parse(raw)
    if (stored?.value !== 'accepted' && stored?.value !== 'rejected') return null

    const savedAt = new Date(stored.savedAt)
    if (Number.isNaN(savedAt.getTime())) return null

    const ageInDays = (Date.now() - savedAt.getTime()) / 86400000
    if (ageInDays > CONSENT_MAX_AGE_DAYS) {
      localStorage.removeItem(STORAGE_KEY)
      return null
    }

    return stored
  } catch {
    return null
  }
}

function storeConsent(value) {
  const record = { value, savedAt: new Date().toISOString() }
  consent.value = record

  if (typeof window === 'undefined') return

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(record))
  } catch {
    // Uložení může selhat např. v privátním režimu — volbu si držíme alespoň pro tuto relaci.
  }
}

consent.value = readStoredConsent()

export function useCookieConsent() {
  const hasDecided = computed(() => consent.value !== null)
  const isAccepted = computed(() => consent.value?.value === 'accepted')
  const isRejected = computed(() => consent.value?.value === 'rejected')
  const savedAt = computed(() => (consent.value ? new Date(consent.value.savedAt) : null))

  function accept() {
    storeConsent('accepted')
  }

  function reject() {
    storeConsent('rejected')
  }

  return { consent, hasDecided, isAccepted, isRejected, savedAt, accept, reject }
}
