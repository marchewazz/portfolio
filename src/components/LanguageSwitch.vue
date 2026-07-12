<script setup>
import { useI18n } from 'vue-i18n'
import FlagUK from '../assets/images/icons/flag-uk.svg?component'
import FlagPL from '../assets/images/icons/flag-pl.svg?component'

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
    class="relative inline-flex items-center w-15 h-8 rounded-full bg-white/10 transition-colors duration-300 border-2 border-primary-claret dark:border-primary-yellow"
    role="switch"
    :aria-checked="locale === 'pl'"
    aria-label="Switch language"
  >

    <span
      class="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300"
      :class="locale === 'pl' ? 'translate-x-7' : 'translate-x-0'"
    />

    <span class="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none">
      <span class="w-4 rounded-full overflow-hidden ring-1 ring-white/20">
        <FlagUK class="w-full h-full" />
      </span>
      <span class="w-4 rounded-full overflow-hidden ring-1 ring-white/20">
        <FlagPL class="w-full h-full" />
      </span>
    </span>
  </button>
</template>