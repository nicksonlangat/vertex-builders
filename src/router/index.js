import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/plans',
    name: 'plans',
   
    component: () => import('../views/Plans.vue')
  },
  {
    path: '/plan/:id',
    name: 'plan',
   
    component: () => import('../views/Plan.vue')
  },
  {
    path: '/payment/:id',
    name: 'payment',
   
    component: () => import('../views/Pay.vue')
  },
  {
    path: '/success/:id',
    name: 'success',
   
    component: () => import('../views/Success.vue')
  },
  {
    path: '/contact',
    name: 'contact',
   
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/login',
    name: 'login',
   
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
   
    component: () => import('../views/Register.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
