<script setup>
import { useI18n } from 'vue-i18n'
import Timeline from '../Timeline.vue'

const { tm } = useI18n()
</script>

<template>
    <section class="">
        <div class="container mx-auto flex justify-center py-16">
            <div  id="experience" class="items-center flex flex-col gap-8 py-16 px-8 bg-primary-blue border border-black shadow-[inset_0_0_8px_rgba(0,0,0,0.5)] shadow-black rounded-3xl w-fit">
                <h3 class="text-primary-yellow text-3xl text-center">
                    {{ $t('home.experience.header') }}
                </h3>
                <Timeline :items="tm('home.experience.items')" />
            </div>
        
        </div>
    </section>
</template>

<style>

</style>