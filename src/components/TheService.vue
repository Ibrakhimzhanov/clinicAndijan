<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import { SERVICE } from '../constants'
import { ArrowRightIcon } from '@heroicons/vue/24/solid'
import { services } from '@/data'
</script>
<template>
  <div class="lg:pt-36 pt-28 px-2" :id="SERVICE">
    <SectionHeading :title="SERVICE" />
    <div
      class="max-w-[1060px] w-full m-auto flex flex-wrap justify-center xl:justify-between gap-5 lg:mb-28"
    >
      <div
        v-for="{ title, subtitle, img } in services"
        :key="title"
        class="group p-6 max-w-[320px] border border-[#f8f4ff] bg-white rounded-[20px] hover:hover:shadow-3xl w-full flex flex-col gap-5 justify-between"
      >
        <div class="flex justify-between">
          <h6 class="text-cGray group-hover:text-cBlack">{{ title }}</h6>
          <img :src="img" alt="Oq dog'" />
        </div>
        <p class="font-sfMedium max-w-[263px]">
          {{ subtitle }}
        </p>
        <router-link
          to="/Bizning xizmatlar"
          class="text-cGray group-hover:text-cBlack flex items-center gap-2"
          >Batafsil <ArrowRightIcon class="h-4 w-4" />
        </router-link>
      </div>
    </div>
  </div>
</template>
