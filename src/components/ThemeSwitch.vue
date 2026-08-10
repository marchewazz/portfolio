<script setup>
import { useTheme } from '../utils/useTheme'

const { theme, toggleTheme } = useTheme()
</script>

<template>
  <button
    @click="toggleTheme"
    class="relative inline-flex items-center w-16 lg:w-18 h-9 lg:h-11 rounded-full transition-colors duration-300 border-2"
    :class="theme === 'dark' ? 'bg-slate-700 border-primary-yellow' : 'bg-primary-yellow border-primary-claret'"
    role="switch"
    :aria-checked="theme === 'dark'"
    :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <span
      class="absolute top-0.5 left-0.5 size-7 lg:size-9 rounded-full bg-white/80 shadow-md flex text-sm lg:text-lg items-center justify-center transition-transform duration-300"
      :class="theme === 'dark' ? 'translate-x-7' : 'translate-x-0'"
    >
      {{ theme === 'dark' ? '🌙' : '☀️' }}
    </span>
  </button>
</template>