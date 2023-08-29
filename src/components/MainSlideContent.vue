<script setup>
import MainSlideText from './MainSlideText.vue'
import MainSlideImage from './MainSlideImage.vue'
defineProps({
  label: {
    type: String
  },
  title: {
    type: String
  },
  images: {
    type: String
  }
})
</script>
<template>
  <div
    class="relative w-full mt-5 h-full flex xl:flex-row flex-col items-center justify-center xl:gap-10 xl:px-6 px-2 xl:pl-28"
  >
    <MainSlideImage :images="images" />
    <MainSlideText :label="label" :title="title" />
  </div>
</template>
