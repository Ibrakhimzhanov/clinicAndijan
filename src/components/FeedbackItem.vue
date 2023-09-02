<script setup>
import { feedbackUsers, feedbackDescriptions } from '@/data'
import { onMounted, ref } from 'vue'
const main = ref()
const thumbs = ref()

onMounted(() => {
  if (thumbs.value && main.value) {
    thumbs.value.sync(main.value.splide)
  }
})
// const mainOptions = {
//   arrows: false,
//   autoplay: '500',
//   type: 'fade',
//   width: '100%',
//   autoWidth: true,
//   pagination: false,
//   rewind: true
// }
const thumbsOptions = {
  type: 'slide',
  gap: '1rem',
  pagination: false,
  arrows: false,
  focus: 'center',
  rewind: true,
  autoplay: 2000,
  isNavigation: true,
  updateOnMove: true
}
const mainOptions = {
  type: 'loop',
  pauseOnHover: true,
  perPage: 1,
  perMove: 1,
  autoplay: 2000,
  gap: '1rem',
  pagination: false,
  arrows: false,
  breakpoints: {
    640: {
      pauseOnHover: true,
      pauseOnFocus: true
    }
  }
}
</script>
<template>
  <div class="flex justify-between lg:flex-row px-5 flex-col gap-20 w-full">
    <!-- mini photo -->
    <Splide
      id="splideC"
      class="lg:flex hidden justify-between gap-10"
      :options="thumbsOptions"
      ref="thumbs"
    >
      <SplideSlide
        class="group flex w-[320px] h-[100px] items-center border border-white bg-cWhite justify-center gap-5 rounded-[20px] hover:bg-white hover:shadow-OurClients"
        v-for="{ id, name, position, img } in feedbackUsers"
        :key="id"
      >
        <img :src="img" :alt="name" />
        <div class="flex flex-col gap-1">
          <h6 class="text-lg">{{ name }}</h6>
          <span class="group-hover:text-cGray text-cBlack">{{ position }}</span>
        </div>
      </SplideSlide>
    </Splide>
    <!-- text -->
    <Splide ref="main" :options="mainOptions">
      <SplideSlide v-for="{ title, rate, description, id } in feedbackDescriptions" :key="id">
        <h6 class="font-sfBold text-xl">{{ title }}</h6>
        <div class="flex gap-5 mt-2.5 mb-5">
          {{ rate }}
        </div>
        <p class="max-w-[537px]" v-html="description"></p>
      </SplideSlide>
    </Splide>
  </div>
</template>
<style scope>
#splideC .splide__list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  display: flex;
  width: 320px;
  height: 100px;
  padding: 25px 60px 25px 30px;
  gap: 30px;
  flex-shrink: 0;
}
#splideC .splide__slide {
  border: 1px solid #fff !important;
}
#splideC .is-active {
  background-color: #fff;
}
</style>
