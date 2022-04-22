import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const gnb = [
  {
    path: '/works',
    name: 'Works',
    component: () => import('../views/Works.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  }
]

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  ...gnb
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  gnb
})

export default router
