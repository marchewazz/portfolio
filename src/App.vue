<script setup>
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

const { t, locale } = useI18n();
const route = useRoute();

function updateHead() {
  document.title = t('head.title');
  document.documentElement.lang = locale.value;

  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', t('head.description'));
}

// update on locale change and on route change (if title depends on the page)
watch([locale, () => route.fullPath], updateHead, { immediate: true });

// --- enter/leave listeners ---
function handleVisibilityChange() {
  if (document.hidden) {
    console.log(t('head.leftPage'));
    document.title = t('head.leftPage');
  } else {
    console.log(t('head.returnedToPage'));
    document.title = t('head.returnedToPage');
  }
}

document.addEventListener('visibilitychange', handleVisibilityChange);
</script>

<template>
  <Header />
  <router-view />
  <Footer />
</template>