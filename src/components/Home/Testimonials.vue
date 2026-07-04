<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const { tm } = useI18n()

const modules = [Autoplay, Pagination, Navigation]
</script>

<template>
    <section class="pt-16 pb-20 bg-primary-claret">
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
                :navigation="true"
                :breakpoints="{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }"
                class="w-full testimonials-swiper"
            >
                <SwiperSlide
                    v-for="(testimonial, index) in tm('home.testimonials.items')"
                    :key="index"
                    class="h-auto pb-12"
                >
                    <div class="flex flex-col justify-between h-full bg-primary-blue rounded-2xl p-6 gap-4">
                        <p class="font-imb text-base text-white">
                            "{{ testimonial.quote }}"
                        </p>

                        <div class="flex items-center gap-3 mt-2">
                            <img
                                v-if="testimonial.avatar"
                                :src="testimonial.avatar"
                                :alt="testimonial.name"
                                class="w-10 h-10 rounded-full object-cover"
                            />
                            <div
                                v-else
                                class="w-10 h-10 rounded-full bg-primary-claret flex items-center justify-center font-heading text-primary-blue"
                            >
                                {{ testimonial.name.charAt(0) }}
                            </div>

                            <div class="flex flex-col">
                                <span class="font-heading text-sm text-primary-yellow">
                                    {{ testimonial.name }}
                                </span>
                                <span class="font-imb text-xs text-white/70">
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

<style>
.testimonials-swiper .swiper-pagination-bullet {
    /* background-color: theme('colors.primary-blue'); */
    opacity: 0.4;
}

.testimonials-swiper .swiper-pagination-bullet-active {
    opacity: 1;
}

.testimonials-swiper .swiper-button-next,
.testimonials-swiper .swiper-button-prev {
    /* color: theme('colors.primary-blue'); */
}

.testimonials-swiper .swiper-button-next::after,
.testimonials-swiper .swiper-button-prev::after {
    font-size: 1.25rem;
}
</style>