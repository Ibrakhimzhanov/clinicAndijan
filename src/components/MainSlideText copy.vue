<script setup>
import BaseButton from './BaseButton.vue'
import { BUTTON_TYPE_NEUTRAL } from '../constants'
import { ref } from 'vue'
import { PlayIcon } from '@heroicons/vue/24/solid'
import MainSlideVideo from './MainSlideVideo.vue'
defineProps({
  label: {
    type: String
  },
  title: {
    type: String
  }
})
const scrollTo = () => {
  window.scroll({
    left: 0,
    top: 680,
    behavior: 'smooth'
  })
}
const videoId = 'XqFJYO-i9aA?si=JBCqD83k1eNE6oDY'
const isModalOpen = ref(false)

const showVideoModal = () => {
  isModalOpen.value = true
}
const closeVideoModal = () => {
  isModalOpen.value = false
}
</script>
<template>
  <div class="flex flex-col items-center xl:items-start max-w-[624px] lg:mt-0 mt-14 w-full gap-5">
    <p
      class="lg:text-[45px] text-[30px] font-sfBold leading-tight xl:text-left text-center w-full flex items-end justify-end"
    >
      {{ label }}
    </p>
    <p
      class="font-sfRegular text-xl max-w-[522px] w-full text-center xl:text-left"
      v-html="title"
    ></p>
    <div class="flex sm:flex-row flex-col gap-5 items-center justify-center">
      <a
        class="bg-main cursor-pointer text-white tracking-wider justify-center flex items-center w-[200px] h-[50px] font-sfMedium text-lg rounded-3xl"
        @click="scrollTo()"
      >
        Qabulga yozilish
      </a>
      <BaseButton @click="showVideoModal" :type="BUTTON_TYPE_NEUTRAL" class="">
        Videoni ko’rish
        <div
          class="relative rounded-full border border-main p-[3px] before:absolute before:animate-ping before:rounded-full before:border before:border-main before:p-[12px] before:top-[2px] before:left-[3px]"
        >
          <div class="bg-main p-[5px] flex items-center justify-center rounded-full">
            <PlayIcon class="h-4 w-4 text-white" />
          </div>
        </div>
      </BaseButton>
      <MainSlideVideo :video-id="videoId" :show-modal="isModalOpen" @close="closeVideoModal" />
    </div>
  </div>
</template>
