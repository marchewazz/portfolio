<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import LanguageSwitch from './LanguageSwitch.vue';
import ThemeSwitch from './ThemeSwitch.vue';

const isScrolled = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 0
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header
    :class="[
      'text-white p-4 flex justify-between max-w-screen px-10 fixed top-0 z-10 w-full transition-colors duration-300',
      isScrolled ? 'bg-primary-blue' : 'bg-transparent'
    ]"
  >
    <nav class="flex gap-4 items-center">
      <router-link to="/">{{ $t('nav.home') }}</router-link>
      <router-link to="/about">{{ $t('nav.about') }}</router-link>
    </nav>
    <div class="flex items-center gap-4">
      <ThemeSwitch />
      <LanguageSwitch />
    </div>
  </header>
</template>