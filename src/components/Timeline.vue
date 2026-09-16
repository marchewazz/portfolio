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
import UpiScreen2 from "../assets/images/screens/upi-screen-2.png"
import CoderhinoScreen from "../assets/images/screens/coderhino.png"
import HowToIabScreen from "../assets/images/screens/how-to-iab.png"
import ForumIabScreen from "../assets/images/screens/forum-iab.png"
import OgramToScreen from "../assets/images/screens/ogram-to.png"
import OgramTo2Screen from "../assets/images/screens/ogram-to-2.png"
import TechnikumScreen from "../assets/images/screens/technikum.png"
import LiceumScreen from "../assets/images/screens/liceum.png"
import TebScreen from "../assets/images/screens/teb.png"
import TebScreen2 from "../assets/images/screens/teb-2.png"
import TebScreen3 from "../assets/images/screens/teb-3.png"
import TebScreen4 from "../assets/images/screens/teb-4.png"
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
    { src: InpostScreen, altKey: "alts.tebRegistrationFormInpost.1" }
  ],
  "teb-registration-form-development": [
    { src: UpiScreen, altKey: "alts.tebRegistrationFormDevelopment.1" },
    { src: UpiScreen2, altKey: "alts.tebRegistrationFormMaintenance.2" }
  ],
  "teb-website-development": [
    { src: TebScreen, altKey: "alts.tebWebsiteDevelopment.1" },
    { src: TebScreen2, altKey: "alts.tebWebsiteDevelopment.1" },
    { src: TebScreen3, altKey: "alts.tebWebsiteDevelopment.1" },
    { src: TebScreen4, altKey: "alts.tebWebsiteDevelopment.1" }
  ],
  "teb-registration-form-maintenance": [
    { src: UpiScreen, altKey: "alts.tebRegistrationFormMaintenance.1" },
  ],
  "milestone": [
    { src: MilestoneScreen, altKey: "alts.milestone.1" }
  ],
  "teb-website-maintenance-1": [
    { src: TebScreen, altKey: "alts.tebWebsiteMaintenance.1" }
  ],
  "teb-website-maintenance-2": [
    { src: TebScreen, altKey: "alts.tebWebsiteMaintenance.1" }
  ],
  "teb-registration-form": [
    { src: UpiScreen, altKey: "alts.tebRegistrationForm.1" }
  ],
  "teb-ai-offers-bot": [
    { src: ChatlabScreen, altKey: "alts.tebAiOffersBot.1" }
  ],
  "teb-school-sites-maintenance": [
    { src: LiceumScreen, altKey: "alts.tebSchoolSitesMaintenance.1" },
    { src: TechnikumScreen, altKey: "alts.tebSchoolSitesMaintenance.2" },
  ],
  "technikum-pl-website": [
    { src: TechnikumScreen, altKey: "alts.technikumPlWebsite.1" }
  ],
  "ogram-to-v2": [
    { src: OgramTo2Screen, altKey: "alts.ogramToV2.1" }
  ],
  "ogram-to": [
    { src: OgramToScreen, altKey: "alts.ogramTo.1" }
  ],
  "iab-forum": [
    { src: ForumIabScreen, altKey: "alts.iabForum.1" }
  ],
  "iab-how-to": [
    { src: HowToIabScreen, altKey: "alts.iabHowTo.1" }
  ],
  "coderhino-company-website": [
    { src: CoderhinoScreen, altKey: "alts.coderhinoCompanyWebsite.1" }
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
const savedScrollY = ref(0)

function toggleProject(itemIndex, projectIndex) {
  const key = `${itemIndex}-${projectIndex}`
  if (activeKey.value === key) {
    activeKey.value = null
    activeProject.value = null
    emit('detail-close')
  } else {
    savedScrollY.value = window.scrollY
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
  const index = activeKey.value // capture before nulling, same as before

  activeKey.value = null
  activeProject.value = null

  setTimeout(() => {
    window.scrollTo({ top: savedScrollY.value, behavior: 'auto' })

    const el = document.getElementById(index)
    if (el) {
      const classes = ['dark:bg-primary-yellow/90','px-2','dark:text-primary-claret!','bg-primary-claret/90','text-primary-yellow']
      classes.forEach(element => {
        el.classList.add(element)
      });
      setTimeout(() => {
         classes.forEach(element => {
          el.classList.remove(element)
        });
      }, 2000)
    }
  }, 300)

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
      <ol v-if="!activeProject" key="timeline" ref="listRef" class="relative min-w-0">
        <li v-for="(item, index) in items" :key="index" class="relative mb-10 md:ms-3 last:mb-0 md:ps-10">
          <span v-if="index !== items.length - 1"
            class="absolute hidden md:block -inset-s-0.5 top-4 -bottom-10 w-1 bg-primary-claret dark:bg-primary-yellow translate-y-2"></span>
          <span
            class="absolute hidden md:flex items-center justify-center w-4 h-4 rounded-full translate-y-1/2 -start-2 ring-4 ring-primary-claret dark:ring-primary-blue bg-primary-blue/90 dark:bg-primary-claret/70"></span>

          <time class="font-heading text-lg text-primary-black dark:text-primary-yellow">
            {{ item.date }}
          </time>

          <div class="flex flex-col items-start lg:flex-row lg:items-center gap-4 py-2">
            <p class="text-xl text-primary-claret dark:text-primary-blue font-bold">
              {{ item.title }} <span class="text-black dark:text-white">- CODERHI<span class="text-[#af272f]">N</span>O</span>
            </p>
            <!-- <Logo class="h-5 text-[#151515] dark:text-white" /> -->
          </div>
          <p class="text-sm text-primary-claret dark:text-primary-blue font-bold mt-2">
            {{ item.form }}
          </p>
          <p class="font-imb text-lg text-primary-black dark:text-primary-white mt-2">
            {{ item.description }}
          </p>

          <div v-if="item.projects && item.projects.length" class="mt-3">
            <div v-for="(project, pIndex) in item.projects" :key="project.title"
              class="border-b-2 border-primary-claret dark:border-primary-yellow">
              <button type="button" class="w-full flex items-center justify-between gap-4 py-4 text-primary-claret dark:text-primary-blue text-left group transition-[padding,background-color]
              focus-visible:bg-primary-claret focus-visible:text-primary-yellow dark:focus-visible:bg-primary-blue dark:focus-visible:text-primary-black"
               :aria-label="`${$t('home.experience.experienceButtonAria')}${project.title}`"
              @click="toggleProject(index, pIndex)" :id="`${index}-${pIndex}`">
                <p class="font-heading text-lg">
                  {{ project.title }}
                </p>
                <ArrowRight class="shrink-0 transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </div>
          </div>
        </li>
      </ol>

      <div v-else key="detail" class="w-full flex flex-col gap-2">
 
           <button
          type="button"
          class="flex items-center gap-2 font-heading text-primary-claret dark:text-primary-blue group
          focus-visible:bg-primary-claret focus-visible:text-primary-yellow dark:focus-visible:bg-primary-blue dark:focus-visible:text-primary-black"
          @click="closePanel"
          :aria-label="$t('home.experience.backButtonAria')"
        >
          <ArrowLeft class="group-hover:-translate-x-2 transition-transform duration-300" />
          {{ $t('home.experience.backToTimeline') }}
        </button>
        <Swiper :modules="[Autoplay]" :slides-per-view="1" :space-between="10" class="w-full rounded-3xl overflow-hidden" :loop="true"
          :autoplay="{ delay: 3000, disableOnInteraction: true }">
          <SwiperSlide v-for="image in activeProjectImages" :key="image.src">
            <img
              :src="image.src"
              class="hover:scale-105 w-full rounded-3xl transition-transform duration-300"
              :alt="$t(`home.experience.${image.altKey}`)"
            />
          </SwiperSlide>
        </Swiper>
        <div class="flex flex-wrap gap-2">
          <span v-for="tech in activeProject.tech" :key="tech"
            class="font-bold font-heading text-primary-claret font-semimedium bg-primary-yellow rounded-full px-3 py-1">
            {{ tech }}
          </span>
        </div>
        <p class="font-heading text-xl text-primary-claret dark:text-primary-blue">
          {{ activeProject.title }}
        </p>
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