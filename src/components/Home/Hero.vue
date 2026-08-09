<script setup>
import { ref } from 'vue'
import Face from "../../assets/images/face.jpg"
import ProfileImg from './ProfileImg.vue'
import LinkedIn from "../../assets/images/icons/linkedin.svg?component"
import GitHub from "../../assets/images/icons/github.svg?component"

const email = 'mateuszmarchewczyk24@gmail.com'
const copied = ref(false)

function copyEmail() {
    navigator.clipboard.writeText(email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
}
</script>

<template>
    <div class="bg-primary-blue dark:bg-primary-claret hero pt-20 min-h-[min(100dvh,1080px)]" id="hero">
        <div class="container mx-auto flex flex-col lg:flex-row items-center lg:justify-evenly gap-16 py-8 lg:py-16">
            <ProfileImg />
            <div class="flex flex-col justify-start gap-4 lg:max-w-[63%]">
                <h1
                    class="flex items-center justify-between text-base sm:text-lg xl:text-2xl bg-primary-yellow text-primary-claret font-bold rounded-full w-fit">
                    <span class="px-2 sm:px-4 lg:px-6 py-2 text-center">Full-stack developer</span>
                    <span class="bg-[#4FC08D] text-white px-2 sm:px-4 lg:px-6 self-stretch flex items-center ml-auto">
                        Vue
                    </span>
                    <span class="bg-[#777BB4] text-white rounded-r-full px-2 sm:px-4 lg:px-6 flex items-center self-stretch">
                        PHP
                    </span>
                </h1>
                <p class="text-3xl font-bold text-primary-claret dark:text-primary-blue mt-4">
                    {{ $t("home.hero.header") }}
                    <span class="text-primary-yellow">
                        Mateusz!
                    </span>
                </p>
                <p class="font-imb text-primary-black dark:text-primary-white text-xl">
                    {{ $t("home.hero.firstParagraph") }}
                </p>
                <p class="font-imb text-primary-black dark:text-primary-white text-xl">
                    {{ $t("home.hero.secondParagraph") }}
                </p>
                <p class="font-imb text-primary-black dark:text-primary-white text-xl">
                    {{ $t("home.hero.thirdParagraph") }}
                </p>

                <div class="flex flex-col xl:flex-row xl:items-center gap-4">
                    <div class="flex items-center flex-wrap xl:justify-center gap-4">
                        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer"
                            aria-label="GitHub"
                            class="flex items-center shrink-0 justify-center w-11 h-11 rounded-full bg-primary-yellow text-primary-claret hover:opacity-80 transition">
                            <GitHub class="size-6" />
                        </a>

                        <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            class="flex items-center shrink-0 justify-center w-11 h-11 rounded-full bg-primary-yellow text-primary-claret hover:opacity-80 transition">
                            <LinkedIn class="size-6" />
                        </a>

                        <div
                            class="flex w-full sm:w-fit justify-between items-center rounded-full bg-primary-yellow text-primary-claret overflow-hidden h-11">
                            <a :href="`mailto:${email}`"
                                class="px-2 lg:px-4 h-full flex items-center justify-center w-full font-semibold text-sm hover:bg-primary-claret/10 transition">
                                {{ email }}
                            </a>
                            <button @click="copyEmail" aria-label="Copy email"
                                class="h-full min-w-11 px-2 lg:px-4 flex items-center justify-center border-l border-primary-claret/20 hover:bg-primary-claret/10 transition-colors cursor-pointer">
                                <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18"
                                    height="18" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="9" y="9" width="11" height="11" rx="2" />
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18"
                                    height="18" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="bg-primary-yellow rounded-full sm:w-fit w-full">
                        <a href="#collaboration"
                            class="flex items-center justify-center h-11 px-4 rounded-full whitespace-nowrap font-semibold text-sm bg-primary-yellow text-primary-claret hover:bg-primary-claret/10 transition-colors w-full">
                            {{ $t("home.hero.more") }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>