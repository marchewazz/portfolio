import { nextTick, watch } from 'vue';
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

function waitForElement(selector, timeout = 3000) {
  return new Promise((resolve) => {
    const found = document.querySelector(selector)
    if (found) return resolve(found)

    const observer = new MutationObserver(() => {
      const el = document.querySelector(selector)
      if (el) {
        observer.disconnect()
        resolve(el)
      }
    })
    observer.observe(document.body, { childList: true, subtree: true })

    setTimeout(() => {
      observer.disconnect()
      resolve(null)
    }, timeout)
  })
}

const router = createRouter({
  history: createWebHistory('/portfolio/'),
  routes,
  async scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    if (to.hash) {
      const el = await waitForElement(to.hash)
      if (el) {
        el.scrollIntoView({ behavior: 'auto', block: 'start' }) 
        return false
      }
      return { top: 0 }
    }

    if (to.name !== from.name) return { top: 0 }
    return false
  },
})

export default router