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
  <div class="flex gap-2">
    <button
      @click="switchLocale('en')"
      :class="{ 'font-bold underline': locale === 'en' }"
    >
      EN
    </button>
    <button
      @click="switchLocale('pl')"
      :class="{ 'font-bold underline': locale === 'pl' }"
    >
      PL
    </button>
  </div>
</template>