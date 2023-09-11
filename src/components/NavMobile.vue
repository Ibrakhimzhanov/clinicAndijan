<script setup>
import { ref } from 'vue'
import { navItems } from '../constants.js'
import NavListItem from './NavListItem.vue'

let isActive = ref(true)
</script>
<template>
  <div class="flex w-full items-end justify-end xl:hidden">
    <button class="group relative" @click="isActive = !isActive">
      <div
        class="relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden rounded-full bg-main shadow-md ring-0 ring-cGray transition-all duration-200 hover:ring-8 group-focus:ring-4"
      >
        <div
          class="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300"
        >
          <div
            class="h-[2px] w-7 origin-left transform bg-white transition-all duration-300 group-focus:rotate-[42deg]"
          ></div>
          <div
            class="h-[2px] w-1/2 transform rounded bg-white transition-all duration-300 group-focus:-translate-x-10"
          ></div>
          <div
            class="h-[2px] w-7 origin-left transform bg-white transition-all duration-300 group-focus:-rotate-[42deg]"
          ></div>
        </div>
      </div>
    </button>
  </div>
  <div
    @click="isActive = !isActive"
    :class="`fixed bottom-0 left-0 right-0 top-0 z-10 flex-col ${isActive ? 'hidden' : 'flex'}`"
  >
    <div class="absolute right-5 top-5 z-20 flex items-center justify-end">
      <button class="group">
        <div
          class="relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden rounded-full bg-secondary shadow-md ring-0 ring-white transition-all duration-200 hover:ring-8 group-focus:ring-4"
        >
          <div
            class="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300"
          >
            <div
              :class="`h-[2px] w-7  bg-white transition-all duration-300 ${
                isActive ? '' : 'origin-left rotate-[42deg] transform'
              }`"
            ></div>
            <div
              :class="`${isActive ? '' : 'translate-x-10'} h-[2px] w-1/2
                transform rounded bg-white transition-all duration-300`"
            ></div>
            <div
              :class="`${isActive ? '' : '-rotate-[42deg]'} h-[2px] w-7
                origin-left transform bg-white transition-all duration-300`"
            ></div>
          </div>
        </div>
      </button>
    </div>
    <ul
      class="relative flex h-full flex-col items-center justify-around bg-main py-20 font-sfMedium"
    >
      <NavListItem class="text-3xl" :to="`/${page}`" v-for="page in navItems" :key="page">
        {{ page }}
      </NavListItem>
    </ul>
  </div>
</template>
