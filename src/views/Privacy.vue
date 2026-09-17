<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n()
const email = 'marchewczykmateusz24@gmail.com'
</script>

<template>
  <main class="text-primary-black dark:text-primary-white transition-colors duration-100 pt-22 lg:pt-16 mx-auto">
    <section class="bg-primary-claret dark:bg-primary-blue transition-colors duration-100">
      <div class="container mx-auto flex justify-center items-center py-8">
        <h1 class="text-2xl dark:text-primary-claret text-primary-yellow text-center">{{ $t('privacy.title') }}</h1>
      </div>
    </section>
    <section class="py-8 container">
        <p class="privacy__updated transition-colors duration-100">{{ t('privacy.lastUpdated') }}</p>

    <section
      v-for="(section, index) in tm('privacy.sections')"
      :key="index"
      class="privacy__section"
    >
      <h2 class="transition-colors duration-100">{{ rt(section.heading) }}</h2>
      <p class="transition-colors duration-100">{{ rt(section.text) }}</p>

      <ul v-if="section.list">
        <li class="transition-colors duration-100" v-for="(item, i) in section.list" :key="i">
          {{ rt(item) }}
        </li>
      </ul>
    </section>

    <p class="privacy__contact transition-colors duration-100">
      {{ t('privacy.contact.text') }}
      <a class="focus-visible:bg-primary-claret focus-visible:text-primary-yellow dark:focus-visible:bg-primary-yellow dark:focus-visible:text-primary-claret focus-visible:scale-120 inline-block transition-[background-color,color,scale] duration-100" :aria-label="$t('privacy.emailAria', { email })" :href="`mailto:${t('privacy.contact.email')}`">{{ t('privacy.contact.email') }}</a>
    </p>
    </section>
  </main>
</template>