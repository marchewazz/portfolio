<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const { tm } = useI18n()

const modules = [Autoplay, Pagination, Navigation]
</script>

<template>
    <section class="py-8 bg-primary-yellow lg:hidden" id="testimonials">
        <div class="container mx-auto items-center flex flex-col gap-8">
            <h3 class="text-primary-blue text-3xl text-center">
                {{ $t('home.testimonials.header') }}
            </h3>

            <Swiper
                :modules="modules"
                :slides-per-view="1"
                :space-between="32"
                :loop="true"
                :autoplay="{ delay: 5000, disableOnInteraction: false }"
                :pagination="{ clickable: true }"
                :breakpoints="{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }"
                class="w-full testimonials-swiper flex"
            >
                <SwiperSlide
                    v-for="(testimonial, index) in tm('home.testimonials.items')"
                    :key="index"
                    class="h-auto pb-12"
                >
                    <div class="flex flex-col justify-between testimonial-card bg-primary-claret h-full border-2 border-primary-blue rounded-2xl p-6 gap-4">
                        <p class="font-imb text-base text-primary-white">
                            "{{ testimonial.quote }}"
                        </p>

                        <div class="flex items-center gap-3 mt-2">
                            <div class="flex flex-col">
                                <span class="font-heading text-sm text-primary-yellow">
                                    {{ testimonial.name }}
                                </span>
                                <span class="font-imb text-xs text-primary-white/70">
                                    {{ testimonial.role }}
                                </span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>