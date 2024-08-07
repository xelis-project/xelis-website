import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/resources',
    name: 'resources',
    component: () => import(/* webpackChunkName: "resouces" */ '../views/ResourcesView.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'not_found',
    component: () => import(/* webpackChunkName: "not_found" */ '../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      const hashElement = document.querySelector(to.hash)
      if (hashElement) {
        hashElement.scrollIntoView({ behavior: 'smooth', block: "center" });
      } else {
        setTimeout(() => {
          document.querySelector(to.hash).scrollIntoView({ behavior: 'smooth', block: "center" });
        }, 300)
      }
    } else {
      window.scrollTo(0, 0);
    }
  }
})

export default router
