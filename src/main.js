import { createApp } from 'vue'
import App from './App.vue'
import VueSplide from '@splidejs/vue-splide'
import { router } from './router'
import '@/assets/main.css'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import '@splidejs/vue-splide/css/skyblue'
const app = createApp(App)
app.use(router)
app.use(VueSplide)
app.mount('#app')
