<script setup>
import { CheckIcon } from '@heroicons/vue/24/solid'
</script>
<template>
  <div class="flex items-center flex-col justify-center">
    <header class="pt-[150px]" id="header">
      <h1 class="text-[8.25rem]" data-lead-id="site-header-title">THANK YOU!</h1>
    </header>

    <div class="flex flex-col gap-5 items-center m-auto max-w-[820px] w-full">
      <CheckIcon class="w-80 text-main" />
      <p class="mt-20 text-xl text-center" data-lead-id="main-content-body">
        Arizani to'ldirganingiz uchun katta rahmat. Bu siz uchun bo'lgani kabi biz uchun ham katta
        ahamiyatga ega! Bugun bizga bir daqiqa vaqt ajratganingizni juda qadrlaymiz.
      </p>
    </div>
  </div>
</template>
