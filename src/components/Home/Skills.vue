<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import Frontend from "../../assets/images/icons/frontend.svg"
import Backend from "../../assets/images/icons/backend.svg"
import Db from "../../assets/images/icons/db.svg"
import CMS from "../../assets/images/icons/cms.svg"
import Tools from "../../assets/images/icons/tools.svg"
import Overlay from "../../assets/images/overlay.svg"
import Cpu from "../../assets/images/icons/cpu.svg"

const { tm } = useI18n()

const activeIndex = ref(0)
const skillsContainer = ref(null)

const skillKeys = [
    { key: 'frontend', icon: Frontend },
    { key: 'backend', icon: Backend },
    { key: 'database', icon: Db },
    { key: 'ai', icon: Cpu },
    { key: 'tools', icon: Tools },
    { key: 'cms', icon: CMS },
]

let intervalId = null

function startAutoCycle() {
    intervalId = setInterval(() => {
        activeIndex.value = (activeIndex.value + 1) % skillKeys.length
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
        <div class="bg-primary-yellow dark:bg-primary-blue py-8 transition-colors duration-500 ease-out">
            <div class="container mx-auto justify-center">
                <h2 class="text-primary-claret text-3xl text-center">
                    {{ $t("home.skills.header") }}
                </h2>
            </div>
        </div>

        <div class="flex flex-col justify-center mx-auto lg:flex-row max-w-480 w-full" ref="skillsContainer">
            <button
                v-for="(skill, index) in skillKeys"
                :key="skill.key"
                @click="toggle(index)"
                class="relative overflow-hidden transition-[background-color,color,padding,flex] duration-500 ease-out flex flex-col gap-4 items-center h-80
                dark:focus-visible:bg-primary-claret focus-visible:bg-primary-blue focus-visible:text-primary-claret dark:focus-visible:text-primary-yellow"
                :class="activeIndex === index ? 'flex-3 bg-primary-yellow dark:bg-primary-blue text-primary-black dark:text-primary-white p-6' : ' text-primary-yellow dark:text-primary-claret flex-1 bg-transparent p-6'"
                 :aria-label="`${$t('home.skills.buttonAria')}${$t(`home.skills.items.${skill.key}.title`)}`"
                >
                <component :is="skill.icon" class="size-12 transition-[max-height] duration-300 overflow-hidden" :class="activeIndex === index ? 'hidden' : 'max-h-12 min-h-12'" />
                <span class="font-heading text-xl whitespace-nowrap mb-4">
                    {{ $t(`home.skills.items.${skill.key}.title`) }}
                </span>

                <div class="grid grid-cols-2 md:grid-cols-1 w-full gap-2 transition-opacity duration-300 font-imb text-xl"
                    :class="activeIndex === index ? 'opacity-100' : 'hidden lg:grid opacity-0'">
                    <span v-for="tech in tm(`home.skills.items.${skill.key}.technologies`)" :key="tech" class="whitespace-nowrap">
                        {{ tech }}
                    </span>
                </div>
            </button>
        </div>
    </section>
</template>