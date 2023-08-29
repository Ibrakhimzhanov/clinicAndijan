<script setup>
// import { Splide, SplideSlide } from '@splidejs/vue-splide'
// import '@splidejs/vue-splide/css'
import { slides } from '@/data'
import MainSlideText from './MainSlideText.vue'
import MainSlideImage from './MainSlideImage.vue'

defineProps(['currentPage'])
</script>
<template>
  <!-- <Splide  :options="{ rewind: true, autoplay: true, gap: '1rem' }"
    aria-labelledby="dynamic-slides-example-heading">
    <SplideSlide v-for="{ id, label, title, img } in slides" :key="id">
      <MainSlideContent :label="label" :title="title" :images="img" />
    </SplideSlide>
 </Splide> -->

  <div v-for="{ id, label, title, img } in slides" :key="id" class="mt-24">
    <div
      class="w-full mt-5 h-full flex xl:flex-row flex-col items-center justify-center xl:gap-10 xl:px-6 px-2 xl:pl-28"
    >
      <MainSlideImage :images="img" />
      <MainSlideText :label="label" :title="title" />
    </div>
  </div>
</template>
<!-- <style scope>
.splide__arrows {
  display: none;
}
</style> -->
