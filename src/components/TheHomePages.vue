<script setup>
import TheArticles from '@/components/TheArticles.vue'
import TheFAQ from '@/components/TheFAQ.vue'
import TheAbout from '@/components/TheAbout.vue'
import TheContact from '@/components/TheContact.vue'
import TheFeedback from '@/components/TheFeedback.vue'
import TheMain from '@/components/TheMain.vue'
import TheDoc from '@/components/TheDoc.vue'
import TheService from '@/components/TheService.vue'

import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowSmallUpIcon } from '@heroicons/vue/24/solid'

const buttonShow = ref(false)
let isScrolling = false

const checkScrollPosition = () => {
  buttonShow.value = window.scrollY > 10
}
const scrollToTop = () => {
  if (!isScrolling && window.scrollY > 0) {
    isScrolling = true
    const scrollStep = window.scrollY / 20
    const scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval)
        isScrolling = false
      } else {
        window.scrollBy(0, -scrollStep)
      }
    }, 15)
  }
}

onMounted(() => {
  checkScrollPosition()
  window.addEventListener('scroll', checkScrollPosition)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScrollPosition)
})
</script>

<template>
  <TheMain />
  <TheDoc />
  <TheService />
  <TheFeedback />
  <TheArticles />
  <TheAbout />
  <TheContact />
  <TheFAQ />
  <transition name="fade">
    <div
      v-if="buttonShow"
      @click="scrollToTop"
      class="fixed rounded-full right-6 bottom-6 bg-main cursor-pointer sm:p-2 p-1"
    >
      <ArrowSmallUpIcon class="h-6 text-white" />
    </div>
  </transition>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
