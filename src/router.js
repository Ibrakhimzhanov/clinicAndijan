import TheHomePages from '@/components/TheHomePages.vue'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: TheHomePages
    },
    {
      path: '/Asosiy',
      component: () => import('@/components/TheHomePages.vue')
    },
    {
      name: 'appointment',
      path: '/doc-appointment/:doctorName',
      component: () => import('@/pages/DocApp.vue'),
      props: true
    },
    {
      path: '/doctor-axrorbek',
      component: () => import('@/pages/DocInfoAA.vue')
    },
    {
      path: '/doctor-murodjon',
      component: () => import('@/pages/DocInfoMM.vue')
    },
    {
      name: 'doc-appointment',
      path: '/doc-appointment',
      component: () => import('@/pages/DocInfoAA.vue')
    },
    {
      name: 'Thanks',
      path: '/thanks',
      component: () => import('@/pages/Thanks.vue')
    },
    {
      name: 'Error',
      path: '/error',
      component: () => import('@/pages/Error.vue')
    },
    {
      path: '/Shifokorlar',
      component: () => import('@/components/TheDoc.vue')
    },
    {
      path: '/Bizning xizmatlar',
      component: () => import('@/components/TheService.vue')
    },
    {
      path: '/Maqolalar',
      component: () => import('@/components/TheArticles.vue')
    },
    {
      path: '/Biz haqimizda',
      component: () => import('@/components/TheAbout.vue')
    },
    {
      path: '/Kontaktlarimiz',
      component: () => import('@/components/TheContact.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  },
  history: createWebHistory()
})
