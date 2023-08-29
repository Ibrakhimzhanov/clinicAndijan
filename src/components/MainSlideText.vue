<script setup>
import BaseButton from './BaseButton.vue'
import { BUTTON_TYPE_DANGER, BUTTON_TYPE_NEUTRAL } from '../constants'
import { ref } from 'vue'
import { PlayIcon } from '@heroicons/vue/24/solid'
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
    top: 580,
    behavior: 'smooth'
  })
}
let isActive = ref(true)
</script>
<template>
  <div
    :class="`flex cursor-pointer items-center z-[505] justify-center w-full bg-[#FFEEE4] absolute top-0 bottom-0 left-0 right-0 ${
      isActive ? 'hidden' : 'flex'
    }`"
  >
    <iframe
      width="50%"
      height="550"
      src="https://www.youtube.com/embed/XqFJYO-i9aA?start=5"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    <div
      @click="isActive = !isActive"
      :class="`fixed bottom-0 right-10 top-10 z-10 flex-col ${isActive ? 'hidden' : 'flex'}`"
    >
      <div
        class="relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden rounded-full bg-secondary shadow-md ring-0 ring-white transition-all duration-200 hover:ring-8 group-focus:ring-4"
      >
        <div
          class="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300"
        >
          <div
            :class="`h-[2px] w-7  bg-white transition-all duration-300 ${
              isActive ? '' : 'origin-left rotate-[42deg] transform'
            }`"
          ></div>
          <div
            :class="`${isActive ? '' : 'translate-x-10'} h-[2px] w-1/2
                    transform rounded bg-white transition-all duration-300`"
          ></div>
          <div
            :class="`${isActive ? '' : '-rotate-[42deg]'} h-[2px] w-7
                    origin-left transform bg-white transition-all duration-300`"
          ></div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col max-w-[624px] gap-5 w-full">
    <p class="text-[45px] font-sfBold leading-tight text-left w-full flex items-end justify-end">
      {{ label }}
    </p>
    <p class="font-sfRegular text-xl max-w-[522px] text-left" v-html="title"></p>
    <!-- eslint-disable vue/no-mutating-props -->
    <div class="flex gap-5">
      <BaseButton @click="scrollTo()" :type="BUTTON_TYPE_DANGER"> Qabulga yozilish </BaseButton>
      <BaseButton @click="isActive = !isActive" :type="BUTTON_TYPE_NEUTRAL" class="">
        Videoni ko’rish
        <div
          class="relative rounded-full border border-main p-[3px] before:absolute before:animate-ping before:rounded-full before:border before:border-main before:p-[12px] before:top-[2px] before:left-[3px]"
        >
          <div class="bg-main p-[5px] flex items-center justify-center rounded-full">
            <PlayIcon class="h-4 w-4 text-white" />
          </div>
          <!-- <img src="../assets/Play.svg" alt="Play" /> -->
        </div>
      </BaseButton>
    </div>
  </div>
</template>
