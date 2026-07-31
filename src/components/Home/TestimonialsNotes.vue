<script setup>
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()
</script>

<template>
    <section class="pt-16 pb-20 overflow-hidden hidden lg:block">
        <div class="container mx-auto items-center flex flex-col gap-8 relative z-2">
            <h3 class="text-primary-yellow text-3xl text-center" id="testimonials">
                {{ $t('home.testimonials.header') }}
            </h3>

            <div class="flex flex-wrap justify-center gap-8 w-full py-12 px-4 border-4 rounded-3xl border-primary-blue shadow-inner shadow-primary-blue bg-primary-blue/70 bg-testimonials">
                <div
                    v-for="(testimonial, index) in tm('home.testimonials.items')"
                    :key="index"
                    class="testimonial-card flex flex-col justify-between border-4 min-h-62.5 border-primary-yellow rounded-2xl p-6 gap-x-8 gap-y-4 bg-primary-claret w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)]"
                >
                    <p class="font-imb text-lg text-primary-white">
                        "{{ testimonial.quote }}"
                    </p>

                    <div class="flex items-center gap-3 mt-2">
                        <div class="flex flex-col">
                            <span class="text-primary-yellow">
                                {{ testimonial.name }}
                            </span>
                            <span class="font-imb text-primary-white">
                                {{ testimonial.role }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>