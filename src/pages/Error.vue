<script setup>
import { BUTTON_TYPE_DANGER } from '../constants'
import BaseButton from '../components/BaseButton.vue'
</script>
<template>
  <div class="flex h-[500px] items-center flex-col justify-center gap-5">
    <header class="pt-[150px]" id="header">
      <h1 class="text-[4rem]" data-lead-id="site-header-title">Xatolik yuz berdi!</h1>
    </header>

    <div class="flex flex-col gap-5 items-center max-w-[820px] w-full">
      <p class="text-xl text-center" data-lead-id="main-content-body">
        Ariza yuborishda xatolik yuz berdi. Iltimos qaytadan urinib ko'ring!
      </p>
    </div>
    <div class="flex gap-10 mt-5">
      <BaseButton :type="BUTTON_TYPE_DANGER" href="Asosiy"> Asosiy sahifa </BaseButton>
      <BaseButton :type="BUTTON_TYPE_DANGER" href="Shifokorlar"> Shifokor topish </BaseButton>
    </div>
  </div>
</template>
