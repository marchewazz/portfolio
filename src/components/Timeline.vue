<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Logo from "../assets/images/logo-dark.svg?component"
import ArrowRight from "../assets/images/icons/arrow-right.svg?component"
import ArrowLeft from "../assets/images/icons/arrow-left.svg?component"
import UpiScreen from "../assets/images/upi-screen.png"

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['detail-open', 'detail-close'])

const listRef = ref(null)
let ctx

const activeKey = ref(null)
const activeProject = ref(null)

function toggleProject(itemIndex, projectIndex) {
  const key = `${itemIndex}-${projectIndex}`

  if (activeKey.value === key) {
    closePanel()
  } else {
    activeKey.value = key
    activeProject.value = props.items[itemIndex].projects[projectIndex]
    emit('detail-open')
  }
}

function isActive(itemIndex, projectIndex) {
  return activeKey.value === `${itemIndex}-${projectIndex}`
}

function closePanel() {
  activeKey.value = null
  activeProject.value = null
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
        toggleActions: 'play none none reverse'
      }
    })
  }, listRef.value)
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <div class="relative min-h-[400px]">
    <Transition name="stage" mode="out-in">
      <!-- STAGE 1: Timeline -->
      <ol v-if="!activeProject" key="timeline" ref="listRef" class="relative min-w-0">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="relative mb-10 ms-3 last:mb-0 ps-10"
        >
          <!-- Connecting line (only if not the last item) -->
          <span
            v-if="index !== items.length - 1"
            class="absolute -inset-s-0.5 top-4 -bottom-10 w-1 bg-primary-yellow"
          ></span>

          <!-- Dot on the line -->
          <span
            class="absolute flex items-center justify-center w-4 h-4 rounded-full -start-2 ring-4 ring-primary-blue bg-primary-claret"
          ></span>

          <!-- Date -->
          <time class="font-heading text-lg text-primary-yellow mb-1">
            {{ item.date }}
          </time>

          <div class="flex items-center gap-4 py-2">
            <h4 class="text-xl text-primary-blue font-bold text-nowrap">
              {{ item.title }}
            </h4>
            <Logo class="h-5" />
          </div>

          <!-- Description -->
          <p class="font-imb text-lg text-primary-white mt-2">
            {{ item.description }}
          </p>

          <!-- Project triggers, styled like the accordion, only if present -->
          <div v-if="item.projects && item.projects.length" class="mt-3">
            <div
              v-for="(project, pIndex) in item.projects"
              :key="project.title"
              class="border-b-2 border-primary-yellow"
            >
              <button
                type="button"
                class="w-full flex items-center justify-between gap-4 py-4 text-left"
                @click="toggleProject(index, pIndex)"
              >
                <h4 class="font-heading text-lg text-primary-blue">
                  {{ project.title }}
                </h4>

                <span
                  class="shrink-0 transition-transform duration-300"
                >
                 <ArrowRight class="text-primary-blue" />
                </span>
              </button>
            </div>
          </div>
        </li>
      </ol>

      <!-- STAGE 2: Project detail (timeline hidden) -->
      <div v-else key="detail" class="w-full flex flex-col gap-2 max-w-140">
 
           <button
          type="button"
          class="flex items-center gap-2 font-heading text-primary-blue"
          @click="closePanel"
        >
          <ArrowLeft class="text-primary-blue" />
          Back to timeline
        </button>
            <img :src="UpiScreen" class="hover:scale-105 w-full rounded-3xl transtion-[scale] duration-300" alt="" />
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in activeProject.tech"
                :key="tech"
                class="font-bold font-heading text-primary-claret font-semimedium bg-primary-yellow rounded-full px-3 py-1"
              >
                {{ tech }}
              </span>
            </div>
            <h5 class="font-heading text-xl text-primary-blue">
              {{ activeProject.title }}
            </h5>
          <p class="font-imb text-lg text-primary-white">
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