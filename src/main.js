import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './main.scss'
import './tailwind.css'
import "@fontsource/jetbrains-mono"
import PrimeVue from 'primevue/config';
import Lara from '@primevue/themes/lara';

createApp(App).use(router).use(i18n).use(PrimeVue, {
    theme: {
      preset: Lara
    }
  }).mount('#app')