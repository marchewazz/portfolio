<script setup>
import { useI18n } from 'vue-i18n'
import flagUK from '../assets/images/icons/flag-uk.svg?url'
import flagPL from '../assets/images/icons/flag-pl.svg?url'

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
    class="relative inline-flex items-center w-17 lg:w-19 h-9 lg:h-11 rounded-full bg-white/30 transition-colors group duration-300 border-2 border-primary-claret dark:border-primary-yellow focus-visible:scale-120"
    role="switch"
    :aria-checked="locale === 'pl'"
    :aria-label="`${$t('nav.switchLanguageAria')} ${locale === 'en' ? $t('nav.polishLanguage') : $t('nav.englishLanguage') }`"
  >
    <span
      class="absolute top-0.5 left-0.5 size-7 lg:size-9 rounded-full bg-gray-200 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-gray-300"
      :class="locale === 'pl' ? 'translate-x-8' : 'translate-x-0'"
    />

    <span class="absolute w-full flex items-center justify-between px-2 pointer-events-none">
        <img :src="flagUK" :alt="$t('nav.flagsAlts.uk')" :class="locale === 'en' ? 'group-hover:scale-110' : ''" class="size-4 lg:size-6 rounded-full overflow-hidden object-cover object-center transition-transform duration-300" />
        <img :src="flagPL" :alt="$t('nav.flagsAlts.pl')" :class="locale === 'pl' ? 'group-hover:scale-110' : ''"class="size-4 lg:size-6 rounded-full overflow-hidden object-cover object-center transition-transform duration-300" />
    </span>
  </button>
</template>