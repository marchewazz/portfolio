<script setup>
import { useTheme } from '../utils/useTheme'

const { theme, toggleTheme } = useTheme()
</script>

<template>
  <button
    @click="toggleTheme"
    class="relative inline-flex items-center w-15 h-8 rounded-full transition-colors duration-300 border-2"
    :class="theme === 'dark' ? 'bg-slate-700 border-primary-yellow' : 'bg-primary-yellow border-primary-claret'"
    role="switch"
    :aria-checked="theme === 'dark'"
    :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <span
      class="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center text-xs transition-transform duration-300"
      :class="theme === 'dark' ? 'translate-x-7' : 'translate-x-0'"
    >
      {{ theme === 'dark' ? '🌙' : '☀️' }}
    </span>
  </button>
</template>