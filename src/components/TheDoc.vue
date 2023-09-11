<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import { DOCTOR } from '../constants'
import { personals } from '@/data'
</script>
<template>
  <div :id="DOCTOR" class="lg:pt-36 pt-28">
    <SectionHeading :title="DOCTOR" />
    <div class="px-5">
      <div
        class="flex flex-col lg:flex-row items-center justify-between m-auto p-6 xl:p-14 xl:pb-6 pb-0 max-w-[1036px] mt-12 mb-10 bg-[#f8f4ff] rounded-3xl"
      >
        <div
          class="flex justify-between w-full gap-4"
          v-for="{ name, position, img, href } in personals"
          :key="name"
        >
          <div class="flex flex-col items-center justify-between w-full">
            <img class="rounded-xl" :src="img" :alt="name" />
            <router-link
              :to="`${href}`"
              class="relative bottom-8 w-full max-w-[264px] flex gap-2 justify-between items-center bg-white rounded-xl hover:shadow-3xl p-3"
            >
              <div class="flex flex-col">
                <b class="text-lg font-sfMedium tracking-wide">{{ name }}</b>
                <span class="text-lg font-sfRegular text-cGray">{{ position }}</span>
              </div>
              <img src="@/assets/button.svg" alt="Button" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
