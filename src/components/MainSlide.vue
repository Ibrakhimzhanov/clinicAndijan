<script setup>
import { slides } from '@/data'
import MainSlideText from './MainSlideText.vue'
import MainSlideImage from './MainSlideImage.vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'

defineProps(['currentPage'])

const mainOptions = {
  arrows: false,
  //   autoplay: '500',
  type: 'fade',
  width: '100%',
  autoWidth: true,
  pagination: false,
  rewind: true
}
</script>
<template>
  <Splide
    class="mt-28 w-full items-start justify-start"
    aria-label="The carousel with thumbnails"
    :options="mainOptions"
  >
    <SplideSlide
      class="w-full mt-7 h-full flex lg:flex-row flex-col items-center justify-center xl:gap-20 xl:px-6 xl:left-20"
      v-for="{ id, img, label, title, top } in slides"
      :key="id"
    >
      <MainSlideImage :images="img" :top="top" :label="label" />
      <MainSlideText :label="label" :title="title" />
    </SplideSlide>
  </Splide>
</template>
<style scope></style>
