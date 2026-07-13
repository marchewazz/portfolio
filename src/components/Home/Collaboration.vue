<script setup>
import { useI18n } from 'vue-i18n'
</script>

<template>
    <section class="pt-16 pb-20 bg-primary-claret bg-experience" id="collaboration">
        <div class="container mx-auto items-center flex flex-col gap-8">
            <h3 class="text-primary-blue text-3xl text-center">
                {{ $t('home.collaboration.header') }}
            </h3>

            <p class="text-primary-blue text-center max-w-2xl">
                {{ $t('home.collaboration.intro') }}
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
                <div
                    v-for="key in ['employment', 'location', 'availability', 'workflow']"
                    :key="key"
                    class="bg-primary-blue/10 rounded-2xl p-6 flex flex-col gap-2"
                >
                    <h4 class="text-primary-blue text-lg font-semibold">
                        {{ $t(`home.collaboration.${key}.title`) }}
                    </h4>
                    <p class="text-primary-blue text-sm">
                        {{ $t(`home.collaboration.${key}.text`) }}
                    </p>
                </div>
            </div>

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
    </section>
</template>