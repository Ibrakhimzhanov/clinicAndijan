<script setup>
import { socialMedia } from '@/data'

const classes = [
  'xl:flex hidden items-center relative bottom-10 justify-between w-full max-w-[1090px] bg-white shadow-3xl rounded-full h-24 py-3 px-12'
]
</script>
<template>
  <div :class="classes">
    <a
      :href="url"
      class="flex items-center gap-3.5 hover:text-main"
      v-for="{ name, img, url } in socialMedia"
      :key="name"
    >
      <img :src="img" :alt="img" />
      <p class="text-2xl font-sfMedium before:content-['•'] before:mr-3">{{ name }}</p>
    </a>
  </div>
</template>
