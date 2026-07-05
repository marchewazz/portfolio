<script setup>
import { useI18n } from 'vue-i18n'
import Timeline from '../Timeline.vue'

const { tm } = useI18n()
</script>

<template>
    <section class="pt-16 pb-20 bg-primary-claret bg-experience" id="experience">
        <div class="container mx-auto items-center flex flex-col gap-8">
               <h3 class="text-primary-blue text-3xl text-center">
            {{ $t('home.experience.header') }}
        </h3>
        <Timeline :items="tm('home.experience.items')" />
        </div>
    </section>
</template>

<style>

</style>