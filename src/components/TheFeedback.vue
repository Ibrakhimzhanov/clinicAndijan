<script setup>
import 'vue3-carousel/dist/carousel.css'
import FeedbackItem from './FeedbackItem.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import { FEEDBACK } from '../constants'
</script>
<template>
  <div class="lg:pt-36 pt-20 lg:px-0 px-4">
    <div class="max-w-[1310px] w-full m-auto bg-[#F8F4FF] rounded-[40px] py-[56px] xl:px-28">
      <SectionHeading :title="FEEDBACK" class="text-center mt-0" />

      <div class="flex h-full overflow-hidden w-full gap-10 justify-between pt-0 lg:pt-8">
        <FeedbackItem />
      </div>
    </div>
  </div>
</template>
