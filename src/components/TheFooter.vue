<script setup>
import LogoMain from './LogoMain.vue'
import { socialMedia } from '@/data'
</script>
<template>
  <div
    class="xl:mt-32 sticky mt-10 flex lg:items-center items-start justify-between rounded-b-none rounded-t-[50px] rounded-tr-[50px] bg-[#E5F0FF] px-5 sm:px-10 lg:px-20 py-10 xl:py-16"
  >
    <LogoMain isFooter />

    <div class="flex flex-col items-end xl:text-left text-right xl:gap-5">
      <h6 class="text-lg">Social media</h6>
      <div class="flex items-center gap-5 mt-5 xl:mt-0">
        <a
          :href="url"
          class="flex items-center gap-3.5 hover:text-main"
          v-for="{ name, img, url } in socialMedia"
          :key="name"
        >
          <img :src="img" :alt="img" />
          <p class="text-2xl xl:flex hidden font-sfMedium before:content-['•'] before:mr-3">
            {{ name }}
          </p>
        </a>
      </div>
      <span class="mt-10 text-lg flex flex-col lg:flex-row">© 2023 All Rights Reserved. </span>
    </div>
  </div>
</template>
