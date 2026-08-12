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


const hasCookieTitle = ref(false)

const isLoading = ref(true)

function updateHead() {
  if (!isLoading.value){
     document.title = `${hasCookieTitle.value ? '🍪 ' : ''}${t(`${route.name}.title`)}`

    document.documentElement.lang = locale.value;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    console.log(`here`)
    metaDesc.setAttribute('content', t(`${route.name}.description`));
  }
}


function handleVisibilityChange() {
  if (document.hidden && !isLoading.value) {
    hasCookieTitle.value = true
    document.title = t('head.leftPage')
  } else {
    document.title = `${hasCookieTitle.value ? '🍪 ' : ''}${t(`${route.name}.title`)}`
  }
}

watch([() => locale.value, () => route.name, isLoading], updateHead, { immediate: true });
document.addEventListener('visibilitychange', handleVisibilityChange);

router.beforeEach((to, from, next) => {
  if (to.name != from.name) isLoading.value = true
  next()
})

router.afterEach((to, from) => {
  isLoading.value = false
  console.log(to, from)
  if (to.name != from.name) window.scrollTo(0, 0)
})
</script>

<template>
  <Header />
  <Loading v-if="isLoading" />
  <router-view v-if="!isLoading" />
  <Footer />
</template>