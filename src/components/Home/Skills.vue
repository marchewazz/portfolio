<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Frontend from "../../assets/images/icons/frontend.svg"
import Backend from "../../assets/images/icons/backend.svg"
import Db from "../../assets/images/icons/db.svg"
import CMS from "../../assets/images/icons/cms.svg"
import Tools from "../../assets/images/icons/tools.svg"
import Overlay from "../../assets/images/overlay.svg"
import Cpu from "../../assets/images/icons/cpu.svg"

const activeIndex = ref(0)
const skillsContainer = ref(null)

const skills = [
    {
        title: 'Frontend',
        technologies: ['Vue', 'React', 'TypeScript', 'Tailwind', 'SCSS'],
        icon: Frontend
    },
    {
        title: 'Backend',
        technologies: ['Node.js', 'Express', 'PHP', 'Laravel'],
        icon: Backend
    },
    {
        title: 'Database',
        technologies: ['PostgreSQL', 'MongoDB', 'Redis'],
        icon: Db
    },
    {
        title: 'AI',
        technologies: ['Codex', 'Claude'],
        icon: Cpu
    },
    {
        title: 'Tools',
        technologies: ['Git', 'Docker', 'Figma', 'Vite'],
        icon: Tools
    },
      {
        title: 'CMS',
        technologies: ['Wordpress'],
        icon: CMS
    },
]

let intervalId = null

function startAutoCycle() {
    intervalId = setInterval(() => {
        activeIndex.value = (activeIndex.value + 1) % skills.length
    }, 5000)
}

function stopAutoCycle() {
    if (intervalId) {
        clearInterval(intervalId)
        intervalId = null
    }
}

function toggle(index) {
    activeIndex.value = index
    if (window.innerWidth < 1024) {
        setTimeout(() => {
            skillsContainer.value.children[Math.max(index - 1, 0)].scrollIntoView()
        }, 300);
    }
    stopAutoCycle()
}

onMounted(() => startAutoCycle())
onUnmounted(() => stopAutoCycle())
</script>

<template>
    <section class="flex flex-col bg-primary-claret dark:bg-primary-yellow" id="skills">
        <div class="bg-[#e1b352] dark:bg-[#93b1c4] py-8">
            <div class="container mx-auto justify-center">
                <h3 class="text-primary-claret text-3xl text-center">
                    {{ $t("home.skills.header") }}
                </h3>
            </div>
        </div>
      
        <div class="flex flex-col justify-center mx-auto lg:flex-row max-w-480 w-full" ref="skillsContainer">
            <button
                v-for="(skill, index) in skills"
                :key="skill.title"
                @click="toggle(index)"
                class="relative overflow-hidden transition-all duration-500 ease-in-out flex flex-col gap-4 items-center
                h-80"
                    :class="activeIndex === index ? 'flex-3 bg-overlay text-primary-black dark:text-primary-white p-6' : ' text-primary-yellow dark:text-primary-claret flex-1 bg-transparent p-2 md:p-6'"
            >
                <component :is="skill.icon" class="size-12 text-primary-yellow dark:text-primary-claret transition-[max-height] duration-300 overflow-hidden" :class="activeIndex === index ? 'hidden' : 'max-h-12 min-h-12'" />
                <span class="font-heading text-xl whitespace-nowrap mb-4">
                    {{ skill.title }}
                </span>

                <div class="flex flex-col gap-2 transition-opacity duration-300 font-imb text-xl"
                    :class="activeIndex === index ? 'opacity-100' : 'hidden lg:block opacity-0'">
                    <span v-for="tech in skill.technologies" :key="tech" class="whitespace-nowrap">
                        {{ tech }}
                    </span>
                </div>
            </button>
        </div>
    </section>
</template>