<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import ResumePL from "../../assets/resume-pl.pdf"
import ResumeEN from "../../assets/resume-en.pdf"

const email = 'marchewczykmateusz24@gmail.com'
const copied = ref(false)

function copyEmail() {
    navigator.clipboard.writeText(email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
}
</script>

<template>
    <section class="sm:pt-16 sm:pb-20">
        <div class="container mx-auto pl-0! pr-0! sm:pl-4! sm:pr-4!">
            <div id="collaboration"
                class="items-center flex flex-col gap-8 bg-primary-claret max-w-6xl mx-auto dark:bg-primary-yellow transition-colors duration-300 ease-out sm:rounded-2xl p-6 lg:p-8 shadow-inner shadow-black">
                <h2 class="text-primary-yellow dark:text-primary-claret text-3xl text-center">
                    {{ $t('home.collaboration.header') }}
                </h2>

                <p class="text-primary-yellow dark:text-primary-claret text-center max-w-2xl">
                    {{ $t('home.collaboration.intro') }}
                </p>
                <div class="flex flex-col lg:flex-row gap-4 max-w-4xl w-full">

                    <div class="rounded-full w-full">
                        <a :href="ResumePL" download
                            :aria-label="$t('home.polishResumeAria')"
                            class="flex items-center justify-center h-11 px-4 rounded-full whitespace-nowrap font-semibold text-sm dark:bg-primary-claret bg-primary-yellow dark:text-primary-blue text-primary-claret  dark:hover:bg-primary-claret/90 hover:bg-primary-yellow/80 transition-colors w-full
                            focus-visible:scale-105 md:focus-visible:scale-120 focus-visible:bg-primary-blue dark:focus-visible:bg-primary-blue focus-visible:text-primary-claret dark:focus-visible:text-primary-claret">
                            {{ $t("home.hero.resume_pl") }}
                        </a>
                    </div>
                    <div
                        class="flex items-center rounded-full min-w-fit bg-primary-blue text-primary-claret overflow-visible max-w-full w-full justify-between">
                        <a :href="`mailto:${email}`"
                        :aria-label="$t('home.emailAria', { email })"
                            class="px-2 lg:px-4 min-h-11 h-full flex rounded-l-full items-center justify-center wrap-anywhere text-center w-full font-semibold text-sm hover:bg-primary-claret/10 transition-colors
                             focus-visible:bg-primary-yellow dark:focus-visible:bg-primary-claret focus-visible:text-primary-claret dark:focus-visible:text-primary-blue focus-visible:scale-105 md:focus-visible:scale-120">
                            {{ email }}
                        </a>
                        <button @click="copyEmail"
                            :aria-label="$t('home.copyEmailAria', { email })"
                            class="h-full px-2 lg:px-4 shrink-0 rounded-r-full min-w-11 min-h-11 flex items-center justify-center border-l border-primary-claret/20 hover:bg-primary-claret/10 transition-colors cursor-pointer
                            focus-visible:bg-primary-yellow dark:focus-visible:bg-primary-claret focus-visible:text-primary-claret dark:focus-visible:text-primary-blue focus-visible:scale-105 md:focus-visible:scale-120">
                            <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18"
                                height="18" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="9" y="9" width="11" height="11" rx="2" />
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"
                                fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </button>
                    </div>
                    <div class="rounded-full w-full">
                        <a :href="ResumeEN" download
                            :aria-label="$t('home.englishResumeAria')"
                            class="flex items-center justify-center h-11 px-4 rounded-full whitespace-nowrap font-semibold text-sm dark:bg-primary-claret bg-primary-yellow dark:text-primary-blue text-primary-claret dark:hover:bg-primary-claret/90 hover:bg-primary-yellow/80 transition-colors w-full
                            focus-visible:scale-105 md:focus-visible:scale-120 focus-visible:bg-primary-blue dark:focus-visible:bg-primary-blue focus-visible:text-primary-claret dark:focus-visible:text-primary-claret">
                            {{ $t("home.hero.resume_en") }}
                        </a>
                    </div>

                </div>


                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
                    <div tabindex="0" v-for="key in ['employment', 'location', 'availability', 'workflow']" :key="key"
                        class="collaboration-card border-2 border-primary-yellow dark:border-primary-blue rounded-2xl p-6 flex flex-col gap-2 hover:scale-105 focus-visible:scale-105 md:hover:scale-120 md:focus-visible:scale-120 transition-[scale] focus-visible:outline-none">
                        <p class="text-primary-claret dark:text-primary-blue text-lg font-semibold">
                            {{ $t(`home.collaboration.${key}.title`) }}
                        </p>
                        <p class="text-primary-black dark:text-primary-blue text-sm">
                            {{ $t(`home.collaboration.${key}.text`) }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>