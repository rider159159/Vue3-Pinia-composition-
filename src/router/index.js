import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/optionPinia',
    name: 'OptionPinia',
    component: () => import(/* webpackChunkName: "OptionPinia" */ '../views/OptionPinia.vue')
  },
  {
    path: '/compositionPinia',
    name: 'CompositionPinia',
    component: () => import('../views/CompositionPinia.vue')
  },
  {
    path: '/food',
    name: 'FoodViews',
    component: () => import('../views/FoodViews.vue')
  },
  {
    path: '/admin',
    name: 'AdminViews',
    component: () => import( '../views/AdminViews.vue'),
    meta: { 
      requiresAuth: true,
    }
  },
  {
    path: '/test',
    name: 'TestViews',
    component: () => import( '../views/TestViews.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
