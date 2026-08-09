import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  // {
  //   path: '/testimonials',
  //   name: 'testimonials',
  //   component: () => import('@/views/Testimonials.vue'),
  // },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router