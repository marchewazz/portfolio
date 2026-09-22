<script setup>
import { useTheme } from '../utils/useTheme'

const { theme, toggleTheme } = useTheme()
</script>

<template>
  <button
    @click="toggleTheme"
    class="relative inline-flex items-center w-16 xl:w-18 h-9 xl:h-11 rounded-full transition-[border-color,scale] duration-200 border-2 group focus-visible:scale-120"
    :class="theme === 'dark' ? 'bg-slate-700 border-primary-yellow' : 'bg-primary-yellow border-primary-claret'"
    role="switch"
    :aria-checked="theme === 'dark'"
    :aria-label="`${$t('nav.switchThemeAria')} ${theme === 'dark' ? $t('nav.brightTheme') : $t('nav.darkTheme') }`"
  >
    <span
      class="absolute top-0.5 left-0.5 size-7 xl:size-9 rounded-full bg-gray-200 shadow-md flex text-sm xl:text-lg items-center justify-center transition-transform duration-300 group-hover:bg-gray-300 group-hover:scale-110"
      :class="theme === 'dark' ? 'translate-x-7' : 'translate-x-0'"
    >
      {{ theme === 'dark' ? '🌙' : '☀️' }}
    </span>
  </button>
</template>