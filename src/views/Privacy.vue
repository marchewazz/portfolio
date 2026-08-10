<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n()
</script>

<template>
  <main class="container dark:text-primary-white pt-16 mx-auto">
    <h1>{{ t('privacy.title') }}</h1>
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
  </main>
</template>