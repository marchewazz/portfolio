<script setup>
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()
</script>

<template>
    <section class="pt-16 pb-20 bg-primary-claret">
        <div class="container mx-auto items-center flex flex-col gap-8">
            <h3 class="text-primary-blue text-3xl text-center">
                {{ $t('home.testimonials.header') }}
            </h3>

            <div class="flex flex-wrap justify-center gap-8 w-full py-8">
                <div
                    v-for="(testimonial, index) in tm('home.testimonials.items')"
                    :key="index"
                    class="testimonial-card flex flex-col justify-between border-4 min-h-62.5 border-primary-yellow rounded-2xl p-6 gap-x-8 gap-y-4 bg-primary-claret w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)]"
                >
                    <p class="font-imb text-lg text-white">
                        "{{ testimonial.quote }}"
                    </p>

                    <div class="flex items-center gap-3 mt-2">
                        <div class="flex flex-col">
                            <span class="text-primary-yellow">
                                {{ testimonial.name }}
                            </span>
                            <span class="font-imb text-white">
                                {{ testimonial.role }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.testimonial-card {
    background-image: url(../../assets/images/paper.svg);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

    &:nth-child(1) { 
        transform: rotate(-4deg); 
        margin-top: 2rem;
    }
    &:nth-child(2) { 
        transform: rotate(6deg); 
    }
    &:nth-child(3) { 
        transform: rotate(-2deg); 
    }
    &:nth-child(4) { 
        transform: rotate(4deg); 
        margin-left: -5rem;
        margin-top: 2rem;
    }


    &:hover {
        transform: rotate(0deg) scale(1.2);
        z-index: 10;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
    }
}
</style>