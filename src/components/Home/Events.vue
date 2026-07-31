<script setup>
import { useI18n } from 'vue-i18n'
</script>

<template>
    <section class="py-8 lg:pt-16 lg:pb-20 bg-primary-claret/70" id="events">
        <div class="container mx-auto items-center flex flex-col gap-8">
            <h3 class="text-primary-blue text-3xl text-center">
                {{ $t('home.events.header') }}
            </h3>
             <div class="flex flex-col gap-4 w-full max-w-3xl">
            <div v-for="event in $tm('home.events.items')" :key="event.name"
                class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 border-b border-primary-blue/20 pb-3">
                <span class="text-primary-blue font-semibold w-32 shrink-0">
                    {{ event.role }}
                </span>
                <div class="flex-1">
                    <p class="text-primary-blue font-medium">
                        {{ event.name }} <span class="opacity-60 text-sm">— {{ event.year }}</span>
                    </p>
                    <p class="text-primary-blue text-sm opacity-80">
                        {{ event.description }}
                    </p>
                </div>
            </div>
        </div>
        </div>
       
    </section>
</template>

<style></style>