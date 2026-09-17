<script setup>
import { useI18n } from 'vue-i18n'
</script>

<template>
    <section class="py-8 lg:pt-16 lg:pb-20 bg-primary-yellow/95 dark:bg-primary-claret/70 transition-colors duration-300 ease-out" id="events">
        <div class="container mx-auto items-center flex flex-col gap-8">
            <h2 class="text-3xl text-center text-primary-claret dark:text-primary-blue">
                {{ $t('home.events.header') }}
            </h2>
             <div class="flex flex-col gap-4 w-full max-w-3xl">
            <div v-for="event in $tm('home.events.items')" :key="event.name"
                class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 border-b border-primary-blue/20 pb-3">
                <p class="font-semibold w-32 shrink-0 text-primary-claret dark:text-primary-blue">
                    {{ event.role }}
                </p>
                <div class="flex-1 text-primary-black dark:text-primary-white">
                    <p class="font-medium">
                        {{ event.name }} <span class="opacity-90 text-sm">— {{ event.year }}</span>
                    </p>
                    <p class="text-sm opacity-90">
                        {{ event.description }}
                    </p>
                </div>
            </div>
        </div>
        </div>
       
    </section>
</template>