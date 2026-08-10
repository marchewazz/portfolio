<script setup>
import { watch, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import router from './router.js';
import Loading from './components/Loading.vue';

const { t, locale } = useI18n();
const route = useRoute();

function updateHead() {
  const cookieEmoji = '🍪 ';
  const hasCookie = document.title.startsWith(cookieEmoji);

  const newTitle = t(`${route.name}.title`);
  document.title = hasCookie ? `${cookieEmoji}${newTitle}` : newTitle;

  document.documentElement.lang = locale.value;

  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', t(`${route.name}.description`));
}

// update on locale change and on route change (if title depends on the page)
watch([locale, () => route.fullPath], updateHead, { immediate: true });

// --- enter/leave listeners ---
function handleVisibilityChange() {
  if (document.hidden) {
    document.title = t(`head.leftPage`);
  } else {
    document.title = t(`${route.name}.returnedToPage`);
  }
}

document.addEventListener('visibilitychange', handleVisibilityChange);

const isLoading = ref(true)

router.beforeEach((to, from, next) => {
  isLoading.value = true
  next()
})

router.afterEach(() => {
  isLoading.value = false
  window.scrollTo(0, 0)
})
</script>

<template>
  <Header />
  <Loading v-if="isLoading" />
  <router-view v-if="!isLoading" />
  <Footer />
</template>