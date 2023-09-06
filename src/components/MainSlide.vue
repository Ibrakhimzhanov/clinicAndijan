<script setup>
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
const slides = [
  {
    id: 0,
    label: 'Teri kasalliklarini davolash, oldini olish va reabilitatsiyasi markazi.',
    title:
      'Eksimer lazer, Vud lampa, kriodestruktor, elektrokoagulyator kabi zamonvaiy tibbiy uskunalar bilan jixozlangan',
    img: 'src/assets/slide-1.svg',
    top: 5
  },
  {
    id: 1,
    label: 'Sochdagi kasalliklarni davolash, oldini olish va reabilitatsiyasi markazi.',
    title:
      'Eksimer lazer, Vud lampa, kriodestruktor, elektrokoagulyator kabi zamonvaiy tibbiy uskunalar bilan jixozlangan',
    img: 'src/assets/slide-2.svg',
    top: 4
  },
  {
    id: 2,
    label: 'Teri kasalliklarini davolash, oldini olish va reabilitatsiyasi markazi.',
    title:
      'Eksimer lazer, Vud lampa, kriodestruktor, elektrokoagulyator kabi zamonvaiy tibbiy uskunalar bilan jixozlangan',
    img: 'src/assets/slide-3.svg',
    top: 10
  }
]
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
