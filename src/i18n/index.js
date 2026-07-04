// src/i18n/index.js
import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import pl from '@/locales/pl.json'

const SUPPORTED_LOCALES = ['en', 'pl']
const DEFAULT_LOCALE = 'en'

function detectBrowserLocale() {
  const candidates = navigator.languages?.length
    ? navigator.languages
    : [navigator.language]

  for (const lang of candidates) {
    const short = lang.slice(0, 2).toLowerCase() // 'pl-PL' -> 'pl'
    if (SUPPORTED_LOCALES.includes(short)) {
      return short
    }
  }

  return DEFAULT_LOCALE
}

function getInitialLocale() {
  const saved = localStorage.getItem('locale')
  if (saved && SUPPORTED_LOCALES.includes(saved)) return saved

  return detectBrowserLocale()
}

const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: DEFAULT_LOCALE,
  messages: { en, pl },
})

export default i18n