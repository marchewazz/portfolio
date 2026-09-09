<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n()
</script>

<template>
  <main class="text-primary-black dark:text-primary-white pt-22 lg:pt-16 mx-auto">
    <section class="bg-primary-claret dark:bg-primary-blue">
      <div class="container mx-auto flex justify-center items-center py-8">
        <h1 class="text-2xl dark:text-primary-claret text-primary-yellow text-center">{{ $t('privacy.title') }}</h1>
      </div>
    </section>
    <section class="py-8 container">
        <p class="privacy__updated">{{ t('privacy.lastUpdated') }}</p>

    <section
      v-for="(section, index) in tm('privacy.sections')"
      :key="index"
      class="privacy__section"
    >
      <h2>{{ rt(section.heading) }}</h2>
      <p>{{ rt(section.text) }}</p>

      <ul v-if="section.list">
        <li v-for="(item, i) in section.list" :key="i">
          {{ rt(item) }}
        </li>
      </ul>
    </section>

    <p class="privacy__contact">
      {{ t('privacy.contact.text') }}
      <a :href="`mailto:${t('privacy.contact.email')}`">{{ t('privacy.contact.email') }}</a>
    </p>
    </section>
  </main>
</template>