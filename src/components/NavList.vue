<script setup>
import { navItems } from '@/constants'
import NavListItem from './NavListItem.vue'
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
