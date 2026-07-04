<script setup>
import Logo from "../assets/images/logo-dark.svg?component"
import Accordion from './Accordion.vue'

defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <ol class="relative ms-3">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="relative mb-10 ms-6 last:mb-0 ps-10"
    >
      <!-- Connecting line (only if not the last item) -->
      <span
        v-if="index !== items.length - 1"
        class="absolute -start-[1px] top-4 bottom-[-2.5rem] w-0.5 bg-primary-yellow"
      ></span>

      <!-- Dot on the line -->
      <span
        class="absolute flex items-center justify-center w-4 h-4 rounded-full -start-2 ring-4 ring-primary-blue bg-primary-claret"
      ></span>

      <!-- Date -->
      <time class="font-heading text-sm text-primary-yellow mb-1">
        {{ item.date }}
      </time>

      <div class="flex items-center gap-4">
        <h4 class="text-lg text-primary-blue mt-1 text-nowrap">
          {{ item.title }}
        </h4>
        <Logo class="h-4" />
      </div>

      <!-- Description -->
      <p class="font-imb text-base text-white mt-2">
        {{ item.description }}
      </p>

      <!-- Accordion for extra detail, only if present -->
      <Accordion
  v-if="item.projects && item.projects.length"
  class="mt-3"
  :items="item.projects"
/>
    </li>
  </ol>
</template>