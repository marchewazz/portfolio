<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const email = 'mateuszmarchewczyk24@gmail.com'
const copied = ref(false)

function copyEmail() {
    navigator.clipboard.writeText(email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
}
</script>

<template>
    <section class="sm:pt-16 sm:pb-20" >
        <div class="container mx-auto pl-0! pr-0! sm:pl-4! sm:pr-4!">
             <div id="collaboration" class="items-center flex flex-col gap-8 bg-primary-claret dark:bg-primary-yellow sm:rounded-2xl p-6 shadow-inner shadow-black">
            <h3 class="text-primary-yellow dark:text-primary-claret text-3xl text-center">
                {{ $t('home.collaboration.header') }}
            </h3>

            <p class="text-primary-yellow dark:text-primary-claret text-center max-w-2xl">
                {{ $t('home.collaboration.intro') }}
            </p>
            
                  <div class="flex items-center rounded-full bg-primary-blue text-primary-claret overflow-hidden h-11 max-w-full w-full sm:w-fit justify-between">
                        <a
                            :href="`mailto:${email}`"
                            class="px-4 h-full flex items-center justify-center w-full font-semibold text-sm hover:bg-primary-claret/10 transition"
                        >
                            {{ email }}
                        </a>
                        <button
                            @click="copyEmail"
                            aria-label="Copy email"
                            class="h-full px-4 min-w-11 flex items-center justify-center border-l border-primary-claret/20 hover:bg-primary-claret/10 transition cursor-pointer"
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
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
                <div
                    v-for="key in ['employment', 'location', 'availability', 'workflow']"
                    :key="key"
                    class="collaboration-card border-2 border-primary-yellow dark:border-primary-blue rounded-2xl p-6 flex flex-col gap-2 hover:scale-105 md:hover:scale-120 transition-[scale]"
                >
                    <h4 class="text-primary-claret dark:text-primary-blue text-lg font-semibold">
                        {{ $t(`home.collaboration.${key}.title`) }}
                    </h4>
                    <p class="text-primary-black dark:text-primary-blue text-sm">
                        {{ $t(`home.collaboration.${key}.text`) }}
                    </p>
                </div>
            </div>
        </div>
        </div>
       
    </section>
</template>