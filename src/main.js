import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './main.scss'
import './tailwind.css'
import "@fontsource/jetbrains-mono"

createApp(App).use(router).use(i18n).mount('#app')