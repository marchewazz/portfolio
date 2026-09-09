<script setup>
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()
</script>

<template>
    <section class="pt-16 pb-20 overflow-hidden hidden lg:block">
        <div class="container mx-auto items-center flex flex-col gap-8 relative z-2">
            <h2 class="text-primary-claret dark:text-primary-yellow text-3xl text-center">
                {{ $t('home.testimonials.header') }}
            </h2>

            <div class="flex flex-wrap justify-center gap-12 w-full py-12 px-4 rounded-3xl bg-primary-claret max-w-6xl dark:bg-primary-blue/70 bg-testimonials">
                <div
                    tabindex="0"
                    v-for="(testimonial, index) in tm('home.testimonials.items')"
                    :key="index"
                    class="testimonial-card flex flex-col justify-between border-4 min-h-62.5 border-primary-yellow rounded-xl p-6 gap-x-8 gap-y-4 bg-primary-claret w-full lg:w-[calc(50%-2rem)]"
                >
                    <p class="font-imb text-lg text-primary-black dark:text-primary-white">
                        "{{ testimonial.quote }}"
                    </p>

                    <div class="flex items-center gap-3 mt-2">
                        <div class="flex flex-col">
                            <p class="text-primary-claret dark:text-primary-yellow">
                                {{ testimonial.name }}
                            </p>
                            <p class="font-imb text-primary-black dark:text-primary-white">
                                {{ testimonial.role }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>