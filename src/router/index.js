import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'HOME',
    component: Home
  },
  {
    path: '/uno',
    name: 'UNO',
    component: () => import('../views/Uno.vue')
  },
  {
    path: '/dos',
    name: 'DOS',
    component: () => import('../views/Dos.vue')
  },
  {
    path: '/tres',
    name: 'TRES',
    component: () => import('../views/Tres.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
