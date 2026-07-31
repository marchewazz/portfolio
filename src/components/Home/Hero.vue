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
            <div class="flex flex-col justify-start gap-4">
                <h1 class="text-xl lg:text-2xl bg-primary-yellow text-primary-claret py-2 w-fit px-6 font-bold rounded-full">
                    Full-stack developer
                </h1>
                <h2 class="text-3xl font-bold text-primary-claret dark:text-primary-blue mt-4">
                    {{ $t("home.hero.header") }}
                    <span class="text-primary-yellow">
                        Mateusz!
                    </span>
                </h2>
                <p class="font-imb text-primary-black dark:text-primary-white text-xl">
                    {{ $t("home.hero.firstParagraph") }}
                </p>

                <div class="flex flex-col">
                    <div class="flex flex-wrap items-center gap-4 mt-4">
                    <a
                        href="https://github.com/your-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        class="flex items-center justify-center w-11 h-11 rounded-full bg-primary-yellow text-primary-claret hover:opacity-80 transition"
                    >
                        <GitHub class="size-6" />
                    </a>

                    <a
                        href="https://linkedin.com/in/your-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        class="flex items-center justify-center w-11 h-11 rounded-full bg-primary-yellow text-primary-claret hover:opacity-80 transition"
                    >
                        <LinkedIn class="size-6" />
                    </a>

                    <!-- Split email pill -->
                    <div class="flex w-full sm:w-fit justify-between items-center rounded-full bg-primary-yellow text-primary-claret overflow-hidden h-11">
                        <a
                            :href="`mailto:${email}`"
                            class="px-5 h-full flex items-center w-full font-semibold text-sm hover:bg-primary-claret/10 transition"
                        >
                            {{ email }}
                        </a>
                        <button
                            @click="copyEmail"
                            aria-label="Copy email"
                            class="h-full px-4 flex items-center justify-center border-l border-primary-claret/20 hover:bg-primary-claret/10 transition cursor-pointer"
                        >
                            <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="9" y="9" width="11" height="11" rx="2" />
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                
                </div>
                      <a
                        href="#collaboration"
                        class="flex items-center justify-center h-11 rounded-full bg-primary-yellow text-primary-claret hover:opacity-80 transition"
                    >
                            {{ $t("home.hero.more-about-collaboration") }}
                    </a>
                </div>
        </div>
    </div>
</template>