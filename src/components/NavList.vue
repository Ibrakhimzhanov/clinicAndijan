<script setup>
import { MAIN, navItems } from '@/constants'
import NavListItem from './NavListItem.vue'
import { ref } from 'vue'

// const currentPage = ref(normalizePageHash())

// function normalizePageHash() {
//   const hash = window.location.hash.slice(1)
//   if (navItems.includes(hash)) {
//     return !hash
//   }
//   window.location.hash = MAIN

//   return MAIN
// }
</script>
<template>
  <nav class="xl:flex hidden justify-center items-center">
    <ul class="flex justify-between gap-12 font-sfMedium text-lg">
      <NavListItem :to="`/${link}`" v-for="link in navItems" :key="link">
        {{ link }}
      </NavListItem>
    </ul>
  </nav>
</template>
