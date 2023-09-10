<script setup>
import { BUTTON_TYPE_DANGER } from '../constants'
import BaseButton from '../components/BaseButton.vue'
</script>

<template>
  <div class="flex px-10 lg:px-0 h-screen w-full items-center flex-col justify-center gap-5">
    <h1 class="text-[4rem] text-center">ARIZA YUBORILDI!</h1>

    <div class="flex flex-col gap-5 items-center max-w-[820px] w-full">
      <p class="text-xl text-center">
        Arizani to'ldirganingiz uchun katta rahmat. Bu siz uchun bo'lgani kabi biz uchun ham katta
        ahamiyatga ega! Bugun bizga bir daqiqa vaqt ajratganingizni juda qadrlaymiz.
      </p>
    </div>
    <BaseButton :type="BUTTON_TYPE_DANGER" href="Asosiy"> Asosiy sahifa </BaseButton>
  </div>
</template>
