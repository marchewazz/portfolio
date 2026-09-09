import { nextTick } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('@/views/Privacy.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve) => {
        const tryScroll = () => {
          const el = document.querySelector(to.hash);
          if (el) {
            resolve({ el: to.hash, behavior: 'smooth' });
          }
        };
        tryScroll();
      });
    }
    if (savedPosition) return savedPosition;
    return { top: 0 };
  }
})

export default router