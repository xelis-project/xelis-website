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
    component: () => import(/* webpackChunkName: "resources" */ '../views/ResourcesView.vue')
  },
  {
    path: '/merch',
    name: 'merch',
    component: () => import(/* webpackChunkName: "merch" */ '../views/MerchView.vue')
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
    // scroll only if anchor is defined
    if (to.hash) {
      const hashElement = document.querySelector(to.hash)
      if (hashElement) {
        hashElement.scrollIntoView({ behavior: 'smooth', block: "center" });
      }
    }
  }
})

export default router
