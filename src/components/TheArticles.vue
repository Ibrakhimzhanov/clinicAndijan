<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { ARTICLES } from '../constants'
import { cards } from '../data'
</script>
<template>
  <div :id="ARTICLES" class="lg:pt-36 pt-28">
    <SectionHeading title="Maqolalar" />
    <Carousel
      :autoplay="2000"
      :wrap-around="true"
      :breakpoints="{
        700: {
          itemsToShow: 4,
          snapAlign: 'center'
        }
      }"
    >
      <slide v-for="{ id, label, title, subtitle, text } in cards" :key="id">
        <div class="carousel__item">
          <div class="group flex w-[240px] flex-col gap-5 rounded-xl p-5 text-cBlack">
            <h6 class="font-sfMedium text-xl" v-html="title" />
            <span class="font-sfRegular text-lg" v-html="subtitle" />
            <p class="text-cGray">
              {{ text }}
            </p>
            <div class="mt-6 flex gap-4">
              <router-link to="/arcticle-info" class="text-cGray group-hover:text-cBlack">{{
                label
              }}</router-link>
              <img
                class="text-cGray group-hover:text-cBlack"
                src="@/assets/arrow.svg"
                alt="Arrow"
              />
            </div>
          </div>
        </div>
      </slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>
<style scope>
.carousel {
  max-width: 1176px;
  margin: 0 auto;
}
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}
.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
  border: 1px solid #f8f4ff;
  border-radius: 10px;
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
  box-shadow:
    -5px 76px 31px rgba(191, 191, 191, 0.01),
    -3px 43px 26px rgba(191, 191, 191, 0.05),
    -1px 19px 19px rgba(191, 191, 191, 0.09),
    0px 5px 10px rgba(191, 191, 191, 0.1),
    0px 0px 0px rgba(191, 191, 191, 0.1);
}
.carousel__item {
  /* background: red; */
  display: flex;
  width: 240px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
}

.carousel__prev,
.carousel__next {
  width: 49px;
  height: 49px;
  border: 3px solid #000;
  box-sizing: content-box;
  border-radius: 100%;
}
.carousel__prev {
  left: -100px;
  bottom: 0px;
}
.carousel__next {
  left: -100px;
  top: 110px;
}
</style>
