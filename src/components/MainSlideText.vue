<script setup>
import BaseButton from './BaseButton.vue'
import { BUTTON_TYPE_NEUTRAL } from '../constants'
import { ref } from 'vue'
import { PlayIcon, XCircleIcon } from '@heroicons/vue/24/solid'
import MainModal from './MainModal.vue'
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
    top: 780,
    behavior: 'smooth'
  })
}
const isOpen = ref(false)
</script>
<template>
  <div class="relative">
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
        <BaseButton @click="isOpen = true" :type="BUTTON_TYPE_NEUTRAL" class="">
          Videoni ko’rish
          <div
            class="relative rounded-full border border-main p-[3px] before:absolute before:animate-ping before:rounded-full before:border before:border-main before:p-[12px] before:top-[2px] before:left-[3px]"
          >
            <div class="bg-main p-[5px] flex items-center justify-center rounded-full">
              <PlayIcon class="h-4 w-4 text-white" />
            </div>
          </div>
        </BaseButton>
      </div>
    </div>
    <Teleport to="body">
      <MainModal :is-open="isOpen" @close="isOpen = false">
        <template #main>
          <div class="xl:w-[75%] w-full m-auto">
            <button
              class="flex justify-end w-full mb-5 text-lg text-white font-sfSemi border-transparent gap-2 items-center"
              @click="isOpen = false"
            >
              Close<XCircleIcon class="h-5 text-main" />
            </button>
            <vue-plyr>
              <div class="plyr__video-embed">
                <iframe
                  src="https://www.youtube.com/embed/Z-k_7xx1nLs?si=WQW-INnJecrmWJjx"
                  allowfullscreen
                  allowtransparency
                  allow="autoplay"
                ></iframe>
              </div>
            </vue-plyr>
          </div>
        </template>
      </MainModal>
    </Teleport>
  </div>
</template>
<style scoped></style>
