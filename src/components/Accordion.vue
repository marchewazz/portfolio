<script setup>
import { ref } from 'vue'

defineProps({
  items: {
    type: Array,
    required: true
  }
})

const openIndex = ref(null)

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="border-b-2 border-primary-yellow"
    >
      <button
        type="button"
        class="w-full flex items-center justify-between gap-4 py-4 text-left"
        @click="toggle(index)"
      >
        <h4 class="font-heading text-lg text-primary-blue">
          {{ item.title }}
        </h4>

        <span
          class="shrink-0 transition-transform duration-300"
          :class="openIndex === index ? 'rotate-180' : 'rotate-0'"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary-blue" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clip-rule="evenodd" />
          </svg>
        </span>
      </button>

      <div
        class="grid transition-[grid-template-rows] duration-300"
        :class="openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
      >
        <div class="overflow-hidden">
          <p class="font-imb text-base text-white pb-4">
            {{ item.description }}
          </p>

          <div class="flex flex-wrap gap-2 pb-6">
            <span
              v-for="tech in item.tech"
              :key="tech"
              class="text-sm font-heading text-primary-blue bg-primary-yellow rounded-full px-3 py-1"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>