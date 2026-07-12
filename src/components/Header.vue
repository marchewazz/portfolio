<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import LanguageSwitch from './LanguageSwitch.vue'
import ThemeSwitch from './ThemeSwitch.vue'

const isScrolled = ref(false)
const activeSection = ref('hero')
const swiperInstance = ref(null)

const sectionLinks = [
  { id: 'hero', key: 'nav.start', href: '#hero' },
  { id: 'skills', key: 'nav.skills', href: '#skills' },
  { id: 'experience', key: 'nav.experience', href: '#experience' },
  { id: 'testimonials', key: 'nav.testimonials', href: '#testimonials' },
  { id: 'collaboration', key: 'nav.collaboration', href: '#collaboration' },
  { id: 'events', key: 'nav.events', href: '#events' }
]

const sectionIds = sectionLinks.map((l) => l.id)

let observer = null

function handleScroll() {
  isScrolled.value = window.scrollY > 0
  if (window.scrollY === 0) activeSection.value = 'hero'
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
    { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
  )
  
  let setted = true

  sectionIds.forEach((id) => {
    const el = document.getElementById(id)
    if (!el) return false
    if (el) observer.observe(el)
  })

  return setted
}

function onSwiperInit(swiper) {
  swiperInstance.value = swiper
}

watch(activeSection, (id) => {
  const index = sectionLinks.findIndex((l) => l.id === id)
  if (index !== -1 && swiperInstance.value) {
    swiperInstance.value.slideTo(index, 300)
  }
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  let interval = null

  interval = setInterval(() => {
    if (setupObserver()) clearInterval(interval)
  }, 1000)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  observer?.disconnect()
})
</script>

<template>
  <header
    :class="[
      'fixed top-0 z-10 w-full transition-colors duration-300',
      isScrolled ? 'bg-primary-blue text-primary-claret' : 'bg-transparent text-primary-claret dark:text-white'
    ]"
  >
    <div class="flex justify-between items-center px-4 md:px-10 h-16 md:h-20">
      <!-- desktop nav -->
      <nav class="hidden md:flex gap-8 items-center">
        <a
          v-for="link in sectionLinks"
          :key="link.id"
          :href="link.href"
          class="font-bold transition-all duration-100"
          :class="activeSection === link.id ? 'text-2xl' : 'text-base'"
        >
          {{ $t(link.key) }}
        </a>
        <a href="https://github.com/marchewazz" target="_blank">Github</a>
        <a href="https://www.linkedin.com/in/mateusz-marchewczyk-b2b7881ba/" target="_blank">LinkedIn</a>
      </nav>

      <!-- mobile: stationary icons row -->
      <div class="md:hidden flex items-center gap-3">
        <a
          href="https://github.com/marchewazz"
          target="_blank"
          aria-label="Github"
          class="opacity-80 hover:opacity-100 transition-opacity"
        >
          <!-- swap for your icon component/svg -->
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.79-.25.79-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.27 5.68.41.36.78 1.08.78 2.17v3.22c0 .3.21.66.8.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/mateusz-marchewczyk-b2b7881ba/"
          target="_blank"
          aria-label="LinkedIn"
          class="opacity-80 hover:opacity-100 transition-opacity"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"/>
          </svg>
        </a>
      </div>

      <div class="flex items-center gap-4">
        <ThemeSwitch />
        <LanguageSwitch />
      </div>
    </div>

    <!-- mobile section nav swiper -->
    <div class="md:hidden relative h-10">
      <div class="pointer-events-none absolute left-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-r from-current to-transparent opacity-10" />
      <div class="pointer-events-none absolute right-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-l from-current to-transparent opacity-10" />

     <Swiper
  slides-per-view="auto"
  :space-between="24"
  :free-mode="true"
  :centered-slides="true"
  class="!px-4 h-full"
  @swiper="onSwiperInit"
>
        <SwiperSlide
          v-for="link in sectionLinks"
          :key="link.id"
          class="!w-auto flex items-center"
        >
          <a
            :href="link.href"
            class="whitespace-nowrap font-bold transition-all duration-150 pb-1"
            :class="activeSection === link.id
              ? 'text-lg border-b-2 border-current'
              : 'text-sm opacity-60'"
          >
            {{ $t(link.key) }}
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  </header>
</template>