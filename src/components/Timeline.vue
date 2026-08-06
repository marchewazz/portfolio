<script setup>
import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Logo from "../assets/images/logo-dark.svg?component"
import ArrowRight from "../assets/images/icons/arrow-right.svg?component"
import ArrowLeft from "../assets/images/icons/arrow-left.svg?component"
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

import UpiScreen from "../assets/images/screens/upi-screen.png"
import CoderhinoScreen from "../assets/images/screens/coderhino.png"
import HowToIabScreen from "../assets/images/screens/how-to-iab.png"
import ForumIabScreen from "../assets/images/screens/forum-iab.png"
import OgramToScreen from "../assets/images/screens/ogram-to.png"
import OgramTo2Screen from "../assets/images/screens/ogram-to-2.png"
import TechnikumScreen from "../assets/images/screens/technikum.png"
import LiceumScreen from "../assets/images/screens/liceum.png"
import TebScreen from "../assets/images/screens/teb.png"
import ChatlabScreen from "../assets/images/screens/chatlab.png"
import MilestoneScreen from "../assets/images/screens/milestone.png"
import InpostScreen from "../assets/images/screens/inpost.png"

import 'swiper/css'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const projectImages = {
  "teb-registration-form-inpost": [
    InpostScreen
  ],
  "teb-registration-form-development": [
    UpiScreen
  ],
  "teb-website-development": [
    TebScreen
  ],
  "teb-registration-form-maintenance": [
    UpiScreen
  ],
  "milestone": [
    MilestoneScreen
  ],
  "teb-website-maintenance": [
    TebScreen
  ],
  "teb-registration-form": [
    UpiScreen
  ],
  "teb-ai-offers-bot": [
    ChatlabScreen
  ],
  "teb-school-sites-maintenance": [
    LiceumScreen,
    TechnikumScreen,
  ],
  "technikum-pl-website": [
    TechnikumScreen
  ],
  "ogram-to-v2": [
    OgramTo2Screen
  ],
  "ogram-to": [
    OgramToScreen
  ],
  "iab-forum": [
    ForumIabScreen
  ],
  "iab-how-to": [
    HowToIabScreen
  ],
  "coderhino-company-website": [
    CoderhinoScreen
  ],
};
const activeProjectImages = computed(() => {
  console.log(projectImages[activeProject.value.slug] ?? [])
  return projectImages[activeProject.value.slug] ?? [];
});

const emit = defineEmits(['detail-open', 'detail-close'])

const listRef = ref(null)
let ctx

const activeKey = ref(null)
const activeProject = ref(null)

function toggleProject(itemIndex, projectIndex) {
  const key = `${itemIndex}-${projectIndex}`
  if (activeKey.value === key) {
    activeKey.value = null
    activeProject.value = null
    emit('detail-close')
  } else {
    activeKey.value = key
    activeProject.value = props.items[itemIndex].projects[projectIndex]
    document.getElementById("experience").scrollIntoView()
    emit('detail-open')
  }
}

function isActive(itemIndex, projectIndex) {
  return activeKey.value === `${itemIndex}-${projectIndex}`
}

function closePanel() {
  const index = activeKey.value
  activeKey.value = null
  activeProject.value = null

  setTimeout(() => {
    document.getElementById(index).scrollIntoView()
  }, 300);
 
  emit('detail-close')
}

onMounted(async () => {
  await nextTick()

  ctx = gsap.context(() => {
    const items = listRef.value.querySelectorAll('li')

    gsap.from(items, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.5,
      scrollTrigger: {
        trigger: listRef.value,
        start: 'top 75%',
        once: true
      }
    })
  }, listRef.value)
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <div class="relative min-h-100 w-full">
    <Transition name="stage" mode="out-in">
      <!-- STAGE 1: Timeline -->
      <ol v-if="!activeProject" key="timeline" ref="listRef" class="relative min-w-0">
        <li v-for="(item, index) in items" :key="index" class="relative mb-10 md:ms-3 last:mb-0 md:ps-10">
          <!-- Connecting line (only if not the last item) -->
          <span v-if="index !== items.length - 1"
            class="absolute hidden md:block -inset-s-0.5 top-4 -bottom-10 w-1 bg-primary-claret dark:bg-primary-yellow"></span>

          <!-- Dot on the line -->
          <span
            class="absolute hidden md:flex items-center justify-center w-4 h-4 rounded-full -start-2 ring-4 ring-primary-claret dark:ring-primary-blue bg-transparent"></span>

          <!-- Date -->
          <time class="font-heading text-lg text-primary-black dark:text-primary-yellow mb-1">
            {{ item.date }}
          </time>

          <div class="flex flex-col items-start lg:flex-row lg:items-center gap-4 py-2">
            <h4 class="text-xl text-primary-claret dark:text-primary-blue font-bold">
              {{ item.title }}
            </h4>
            <Logo class="h-5 text-[#151515] dark:text-white" />
          </div>
          <h4 class="text-sm text-primary-claret dark:text-primary-blue font-bold">
            {{ item.form }}
          </h4>
          <!-- Description -->
          <p class="font-imb text-lg text-primary-black dark:text-primary-white mt-2">
            {{ item.description }}
          </p>

          <!-- Project triggers, styled like the accordion, only if present -->
          <div v-if="item.projects && item.projects.length" class="mt-3">
            <div v-for="(project, pIndex) in item.projects" :key="project.title"
              class="border-b-2 border-primary-claret dark:border-primary-yellow">
              <button type="button" class="w-full flex items-center justify-between gap-4 py-4 text-left group"
                @click="toggleProject(index, pIndex)" :id="`${index}-${pIndex}`">
                <h4 class="font-heading text-lg text-primary-claret dark:text-primary-blue">
                  {{ project.title }}
                </h4>

                <ArrowRight class="shrink-0 text-primary-claret dark:text-primary-blue transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </div>
          </div>
        </li>
      </ol>

      <!-- STAGE 2: Project detail (timeline hidden) -->
      <div v-else key="detail" class="w-full flex flex-col gap-2">
 
           <button
          type="button"
          class="flex items-center gap-2 font-heading text-primary-claret dark:text-primary-blue group"
          @click="closePanel"
        >
          <ArrowLeft class="group-hover:-translate-x-2 transition-transform duration-300" />
          {{ $t('home.experience.backToTimeline') }}
        </button>
        <Swiper :modules="[Autoplay]" :slides-per-view="1" :space-between="10" class="w-full rounded-3xl overflow-hidden" :loop="true" 
        :autoplay="{
          delay: 3000,
          disableOnInteraction: true,
        }">
          <SwiperSlide v-for="image in activeProjectImages" :key="image">
            <img :src="image" class="hover:scale-105 w-full rounded-3xl transition-transform duration-300" alt="" />
          </SwiperSlide>
        </Swiper>
        <div class="flex flex-wrap gap-2">
          <span v-for="tech in activeProject.tech" :key="tech"
            class="font-bold font-heading text-primary-claret font-semimedium bg-primary-yellow rounded-full px-3 py-1">
            {{ tech }}
          </span>
        </div>
        <h5 class="font-heading text-xl text-primary-claret dark:text-primary-blue">
          {{ activeProject.title }}
        </h5>
        <p class="font-imb text-lg text-primary-black dark:text-primary-white">
          {{ activeProject.description }}
        </p>

      </div>
    </Transition>
  </div>
</template>

<style scoped>
.stage-enter-active,
.stage-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.stage-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.stage-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>