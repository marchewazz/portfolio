<script setup>
import { ref } from 'vue'
import Face from "../../assets/images/face.jpg"
import ProfileImg from './ProfileImg.vue'

const email = 'mateuszmarchewczyk24@gmail.com'
const copied = ref(false)

function copyEmail() {
    navigator.clipboard.writeText(email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
}
</script>

<template>
    <div class="bg-primary-blue dark:bg-primary-claret hero pt-20" id="hero">
        <div class="container mx-auto flex flex-col lg:flex-row items-center lg:justify-evenly gap-16 py-16">
            <ProfileImg />
            <div class="flex flex-col justify-start gap-4">
                <h1 class="text-2xl bg-primary-yellow text-primary-claret py-2 w-fit px-6 font-bold rounded-full">
                    Full-stack developer
                </h1>
                <h2 class="text-3xl font-bold text-primary-claret dark:text-primary-blue mt-4">
                    {{ $t("home.hero.header") }}
                    <span class="text-primary-yellow">
                        Mateusz!
                    </span>
                </h2>
                <p class="font-imb text-black dark:text-white text-xl">
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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55
                                0-.27-.01-1.15-.02-2.09-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7
                                1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68
                                0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.73 0c2.19-1.49
                                3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.08.78 2.17
                                0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z"/>
                        </svg>
                    </a>

                    <a
                        href="https://linkedin.com/in/your-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        class="flex items-center justify-center w-11 h-11 rounded-full bg-primary-yellow text-primary-claret hover:opacity-80 transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05
                                c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/>
                        </svg>
                    </a>

                    <!-- Split email pill -->
                    <div class="flex items-center rounded-full bg-primary-yellow text-primary-claret overflow-hidden h-11">
                        <a
                            :href="`mailto:${email}`"
                            class="px-5 h-full flex items-center font-semibold text-sm hover:bg-primary-claret/10 transition"
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