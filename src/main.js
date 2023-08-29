import { createApp } from 'vue'
import App from './App.vue'
import TheMain from './components/TheMain.vue'

import '@/assets/main.css'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: TheMain
    },
    {
      path: '/Asosiy',
      component: () => import('@/components/TheMain.vue')
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
  history: createWebHistory()
})

const app = createApp(App)

app.use(router)
app.mount('#app')
