<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Timeline from '../Timeline.vue'

const { tm } = useI18n()

const showHeader = ref(true)
</script>

<template>
    <section class="">
        <div class="container mx-auto flex justify-center py-8 lg:py-16">
            <div  id="experience" class="items-center flex flex-col w-full lg:w-160 gap-8 p-8 bg-primary-blue/90 dark:bg-primary-claret/70 border border-black shadow-[inset_0_0_8px_rgba(0,0,0,0.5)] shadow-black rounded-3xl">
                <h2 v-if="showHeader" class="text-primary-claret dark:text-primary-yellow text-3xl text-center">
                    {{ $t('home.experience.header') }}
                </h2>
                <Timeline
                    :items="tm('home.experience.items')"
                    @detail-open="showHeader = false"
                    @detail-close="showHeader = true"
                />
            </div>
        </div>
    </section>
</template>

<style>

</style>