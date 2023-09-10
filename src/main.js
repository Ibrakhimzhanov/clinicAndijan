import { createApp } from 'vue'
import App from './App.vue'
import VueSplide from '@splidejs/vue-splide'
import VuePlyr from 'vue-plyr'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import '@splidejs/vue-splide/css/skyblue'
import 'vue-plyr/dist/vue-plyr.css'
import { router } from './router'
import '@/assets/main.css'

const app = createApp(App)
app.use(router)
app.use(VuePlyr)
app.use(VueSplide)
app.mount('#app')
