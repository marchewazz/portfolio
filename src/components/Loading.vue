<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const loadingKeys = [
  'loader.text1',
  'loader.text2',
  'loader.text3',
  'loader.text4',
  'loader.text5',
  'loader.text6',
]

const currentKey = ref(loadingKeys[Math.floor(Math.random() * loadingKeys.length)])
let intervalId = null

function pickRandom() {
  const pool = loadingKeys.filter(k => k !== currentKey?.value)
  const source = pool.length ? pool : loadingKeys
  return source[Math.floor(Math.random() * source.length)]
}

onMounted(() => {
  intervalId = setInterval(() => {
    currentKey.value = pickRandom()
  }, 1000) 
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div id="loader" class="px-4 lg:px-10 bg-primary-blue/90 dark:bg-primary-claret/50 dark:[body:has(#loader)_&]:bg-primary-claret flex flex-col justify-center items-center gap-4 py-8 border-t-2 border-t-primary-yellow dark:border-t-primary-blue">
    <div class="loader"></div>
    <span :key="currentKey" class="text-primary-black dark:text-primary-white">
      {{ $t(currentKey) }}
    </span>
  </div>
</template>

<style>
.loader {
  width: 60px;
  aspect-ratio: 2;
  --_g: no-repeat radial-gradient(circle closest-side, var(--color-primary-black) 90%,#0000);
  background: 
    var(--_g) 0%   50%,
    var(--_g) 50%  50%,
    var(--_g) 100% 50%;
  background-size: calc(100%/3) 50%;
  animation: l3 1s infinite linear;
}
@keyframes l3 {
    20%{background-position:0%   0%, 50%  50%,100%  50%}
    40%{background-position:0% 100%, 50%   0%,100%  50%}
    60%{background-position:0%  50%, 50% 100%,100%   0%}
    80%{background-position:0%  50%, 50%  50%,100% 100%}
}

.dark .loader {
    --_g: no-repeat radial-gradient(circle closest-side,var(--color-primary-white) 90%,#0000);
}

/* text swap transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-from {
  opacity: 0;
}
</style>