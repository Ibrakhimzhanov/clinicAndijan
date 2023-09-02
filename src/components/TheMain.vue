<script setup>
import { MAIN } from '../constants'
import MainSlide from './MainSlide.vue'
import MainSocial from './MainSocial.vue'
defineProps(['currentPage'])
</script>
<template>
  <div
    :id="MAIN"
    class="flex flex-col items-center w-full h-full z-100 bg-[#E5F0FF] xl:max-h-[650px] mb-0 xl:mb-24 px-5 xl:px-10 xl:py-0 py-5"
  >
    <MainSlide :current-page="currentPage" />
    <MainSocial />
  </div>
</template>
