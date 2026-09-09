<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import LanguageSwitch from './LanguageSwitch.vue'
import ThemeSwitch from './ThemeSwitch.vue'
import LinkedIn from "../assets/images/icons/linkedin.svg"
import GitHub from "../assets/images/icons/github.svg"
import { useRoute } from "vue-router"

const isScrolled = ref(false)
const activeSection = ref('hero')
const swiperInstance = ref(null)

const route = useRoute()

const sectionLinks = [
  { id: 'hero', key: 'nav.start', href: '#hero' },
  { id: 'skills', key: 'nav.skills', href: '#skills' },
  { id: 'experience', key: 'nav.experience', href: '#experience' },
  { id: 'testimonials', key: 'nav.testimonials', href: '#testimonials' },
  { id: 'events', key: 'nav.events', href: '#events' },
  { id: 'collaboration', key: 'nav.collaboration', href: '#collaboration' },
]

const sectionIds = sectionLinks.map((l) => l.id)

let observer = null
let interval = null

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

// Ensures we don't spin up duplicate observers/intervals if this
// gets triggered more than once (e.g. mount + route watch).
function ensureObserverSetup() {
  if (observer || interval) return

  interval = setInterval(() => {
    if (setupObserver()) {
      clearInterval(interval)
      interval = null
    }
  }, 1000)
}

function teardownObserver() {
  if (interval) {
    clearInterval(interval)
    interval = null
  }
  observer?.disconnect()
  observer = null
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

watch(
  () => route.name && route.name,
  (name) => {
    if (name === 'home') {
      ensureObserverSetup()
    } else {
      teardownObserver()
    }
  }
)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)

  if (route.name && route.name === 'home') {
    ensureObserverSetup()
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  teardownObserver()
})
</script>

<template>
  <header :class="[
    'top-0 z-10 w-full transition-colors duration-300',
    isScrolled ? 'bg-primary-blue text-primary-claret' : 'bg-primary-blue/90 dark:bg-primary-claret/50 dark:[body:has(#loader)_&]:bg-primary-claret [body:not(:has(#loader))_&]:bg-transparent text-primary-claret dark:text-primary-white'
  ]">
    <div class="flex lg:justify-between gap-2 items-center px-4 lg:px-10 h-12 lg:h-16">
      <nav class="hidden lg:flex lg:gap-4 xl:gap-8 items-center h-full">
        <a v-if="route.name && route.name == 'home'" v-for="link in sectionLinks" :key="link.id" :href="link.href"
          class="font-bold transition-[font-weight,font-size] duration-100 h-full flex items-center hover:text-xl hover:font-black"
          :class="activeSection === link.id ? 'text-xl' : 'text-base'">
          {{ $t(link.key) }}
        </a>
        <RouterLink v-if="route.name && route.name != 'home'" to="/" class="font-bold transition-[font-weight,font-size] duration-100 h-full flex items-center hover:text-xl hover:font-black">
          {{ $t("nav.backToMainPage") }}
        </RouterLink>
        <a class="h-full min-w-11 items-center justify-center group lg:flex" href="https://github.com/marchewazz"
          target="_blank">
          <component :is="GitHub" class="w-7 group-hover:w-8 transition-[width] duration-100" />
        </a>
        <a class="h-full min-w-11 items-center justify-center group lg:flex"
          href="https://www.linkedin.com/in/mateusz-marchewczyk-b2b7881ba/" target="_blank">
          <component :is="LinkedIn" class="w-7 group-hover:w-8 transition-[width] duration-100" />
        </a>
      </nav>

      <div class="lg:hidden flex items-center gap-3 self-stretch">
        <a href="https://github.com/marchewazz" target="_blank" aria-label="Github"
          class="h-full min-w-11 min-h-11 flex items-center justify-center group">
          <component class="w-7 group-hover:w-8 transition-[width] duration-100" :is="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/mateusz-marchewczyk-b2b7881ba/" target="_blank" aria-label="LinkedIn"
          class="h-full min-w-11 min-h-11 flex items-center justify-center group">
          <component class="w-7 group-hover:w-8 transition-[width] duration-100" :is="LinkedIn" />
        </a>
      </div>

      <div class="flex items-center gap-4 ml-auto lg:ml-0">
        <ThemeSwitch />
        <LanguageSwitch />
      </div>
    </div>

    <div class="lg:hidden relative h-10"
    :class="{ 'px-4 lg:px-10 flex items-center': route.name && route.name != 'home' }">
      <nav>
        <RouterLink v-if="route.name && route.name != 'home'" to="/" class="font-bold h-10 transition-[font-weight,font-size] duration-100 flex items-center text-sm hover:text-base hover:font-black">
          {{ $t("nav.backToMainPage") }}
        </RouterLink>
        <Swiper v-if="route.name && route.name == 'home'" slides-per-view="auto" :space-between="24" :free-mode="true"
          :centered-slides="true" class="!px-4 h-full" @swiper="onSwiperInit">

          <SwiperSlide v-for="link in sectionLinks" :key="link.id" class="!w-auto flex items-center">
            <a :href="link.href" class="whitespace-nowrap font-bold transition-all duration-150 pb-1" :class="activeSection === link.id
              ? 'text-lg border-b-2 border-current'
              : 'text-sm opacity-60'">
              {{ $t(link.key) }}
            </a>
          </SwiperSlide>
        </Swiper>
      </nav>
    </div>
  </header>
</template>