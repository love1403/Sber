import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IosAndroidView from '@/views/IosAndroidView.vue'
import IosView from '@/views/IosView.vue'
import AndroidView from '@/views/AndroidView.vue'
import WebView from '@/views/WebView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/ios-android',
      component: IosAndroidView,
    },
    {
      path: '/ios',
      component: IosView,
    },
    {
      path: '/android',
      component: AndroidView,
    },
    {
      path: '/web',
      component: WebView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
