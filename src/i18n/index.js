import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import cs from './locales/cs.json'
import de from './locales/de.json'
import sk from './locales/sk.json'
import pl from './locales/pl.json'

export const SUPPORTED_LOCALES = ['en', 'cs', 'de', 'sk', 'pl']

const LOCALE_LABELS = {
  en: 'English',
  cs: 'Čeština',
  de: 'Deutsch',
  sk: 'Slovenčina',
  pl: 'Polski',
}

const LOCALE_SHORT = {
  en: 'EN',
  cs: 'CZ',
  de: 'DE',
  sk: 'SK',
  pl: 'PL',
}

const messages = { en, cs, de, sk, pl }

function normalizeBrowserLocale(lang) {
  const code = (lang || '').split('-')[0].toLowerCase()
  if (code === 'cz') return 'cs'
  return SUPPORTED_LOCALES.includes(code) ? code : null
}

export function detectLocale() {
  if (typeof window === 'undefined') return 'en'

  const stored = localStorage.getItem('locale')
  if (stored && SUPPORTED_LOCALES.includes(stored)) return stored

  const candidates = navigator.languages?.length
    ? navigator.languages
    : [navigator.language]

  for (const lang of candidates) {
    const match = normalizeBrowserLocale(lang)
    if (match) return match
  }

  return 'en'
}

export function persistLocale(locale) {
  if (typeof window === 'undefined') return
  localStorage.setItem('locale', locale)
  document.documentElement.lang = locale
}

export function getLocaleLabel(locale) {
  return LOCALE_LABELS[locale] ?? locale
}

export function getLocaleShort(locale) {
  return LOCALE_SHORT[locale] ?? locale.toUpperCase()
}

export const localeOptions = SUPPORTED_LOCALES.map((code) => ({
  code,
  label: LOCALE_LABELS[code],
  short: LOCALE_SHORT[code],
}))

const initialLocale = detectLocale()
persistLocale(initialLocale)

const i18n = createI18n({
  legacy: true,
  locale: initialLocale,
  fallbackLocale: 'en',
  messages,
})

export default i18n
