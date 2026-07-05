<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

function switchLocale(lang) {
  locale.value = lang
  localStorage.setItem('locale', lang)
  document.documentElement.lang = lang
}
</script>

<template>
  <button
    @click="switchLocale(locale === 'en' ? 'pl' : 'en')"
    class="relative inline-flex items-center w-20 h-8 rounded-full bg-white/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/40"
    role="switch"
    :aria-checked="locale === 'pl'"
    aria-label="Switch language"
  >
    <span
      class="absolute top-0.5 left-0.5 w-9 h-7 rounded-full bg-white shadow-md transition-transform duration-300 flex items-center justify-center text-xs font-bold text-slate-800"
      :class="locale === 'pl' ? 'translate-x-[2.55rem]' : 'translate-x-0'"
    >
      {{ locale === 'pl' ? 'PL' : 'EN' }}
    </span>

    <span class="absolute inset-0 flex items-center justify-between px-2.5 text-xs font-bold text-white/50 pointer-events-none">
      <span>EN</span>
      <span>PL</span>
    </span>
  </button>
</template>