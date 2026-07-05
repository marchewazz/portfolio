<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import LanguageSwitch from './LanguageSwitch.vue';
import ThemeSwitch from './ThemeSwitch.vue';

const isScrolled = ref(false)
const activeSection = ref('hero')

const sectionIds = ['hero', 'skills', 'experience', 'testimonials']
let observer = null

function handleScroll() {
  isScrolled.value = window.scrollY > 0
  if (window.scrollY == 0) activeSection.value = "hero"
}

function setupObserver() {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    {
      // triggers when a section crosses the vertical center of the viewport
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }
  )

  sectionIds.forEach((id) => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  setupObserver()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  observer?.disconnect()
})
</script>

<template>
  <header
    :class="[
      'p-4 flex justify-between max-w-screen px-10 fixed top-0 z-10 w-full transition-colors duration-300 h-20',
      isScrolled ? 'bg-primary-blue text-primary-claret' : 'bg-transparent text-primary-claret dark:text-white'
    ]"
  >
    <nav class="flex gap-8 items-center">
      <a
        class="font-bold transition-all duration-300"
        :class="activeSection === 'hero' ? 'text-2xl' : 'text-base'"
        href="#hero"
      >
        {{ $t('nav.start') }}
      </a>
      <a
        class="font-bold transition-all duration-300"
        :class="activeSection === 'skills' ? 'text-2xl' : 'text-base'"
        href="#skills"
      >
        {{ $t('nav.skills') }}
      </a>
      <a
        class="font-bold transition-all duration-300"
        :class="activeSection === 'experience' ? 'text-2xl' : 'text-base'"
        href="#experience"
      >
        {{ $t('nav.experience') }}
      </a>
      <a
        class="font-bold transition-all duration-300"
        :class="activeSection === 'testimonials' ? 'text-2xl' : 'text-base'"
        href="#testimonials"
      >
        {{ $t('nav.testimonials') }}
      </a>
      <a href="https://github.com/marchewazz" target="_blank">Github</a>
      <a href="https://www.linkedin.com/in/mateusz-marchewczyk-b2b7881ba/" target="_blank">LinkedIn</a>
    </nav>
    <div class="flex items-center gap-4">
      <ThemeSwitch />
      <LanguageSwitch />
    </div>
  </header>
</template>