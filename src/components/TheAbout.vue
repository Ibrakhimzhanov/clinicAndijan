<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import { ref } from 'vue'
import { ABOUT, BUTTON_TYPE_DANGER, BUTTON_TYPE_NEUTRAL } from '../constants'
import { PlayIcon } from '@heroicons/vue/24/solid'
import BaseButton from './BaseButton.vue'
let isActive = ref(true)
</script>

<template>
  <div
    :class="`fixed flex cursor-pointer items-center z-[50] justify-center w-full bg-[#FFEEE4]  top-0 bottom-0 left-0 right-0 ${
      isActive ? 'hidden' : 'flex'
    }`"
  >
    <iframe
      width="50%"
      height="550"
      src="https://www.youtube.com/embed/XqFJYO-i9aA?start=5"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    <div
      @click="isActive = !isActive"
      :class="`fixed bottom-0 right-10 top-10 z-10 flex-col ${isActive ? 'hidden' : 'flex'}`"
    >
      <div
        class="relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden rounded-full bg-secondary shadow-md ring-0 ring-main transition-all duration-200 hover:ring-4 group-focus:ring-2"
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
    </div>
  </div>
  <div :id="ABOUT" class="lg:pt-36 pt-20">
    <SectionHeading :title="ABOUT" />
    <div
      class="m-auto flex lg:flex-row flex-col xl:gap-0 xl:p-0 p-5 gap-10 max-w-[1060px] items-center justify-between"
    >
      <div class="flex flex-col items-start justify-between gap-4 font-sfBold">
        <h6 class="text-2xl text-cGray">AnDerma Klinikasi</h6>
        <h5 class="max-w-[415px] text-xl font-sfSemi">
          AnDerma Dermatology klinikasi Andijon viloyatida tashkil qilingan
          <span class="text-main"> birinchi teri kasallilari</span>
          klinikasi hisoblanadi.
        </h5>
        <p class="max-w-[430px] font-sfRegular text-lg">
          Bizning klinikamizda Farg‘ona vodiysi aholisi orasida teri kasalligi bilan kasallangan
          bemorlarga zamonaviy bilimga ega dermatologlar va oxirgi rusumdagi zamonaviy tibbiy
          jihozlar bilan tibbiy xizmat ko‘rsatiladi. <br />
          Qulay joylashuv va tibbiy xizmat sifati bilan bemorlarga qulaylik yaratib kelmoqdamiz.
        </p>
      </div>
      <div class="relative flex items-end justify-center">
        <img class="rounded-[40px]" src="../assets/about.jpg" alt="Biz haqimizda" />
        <div
          class="absolute bottom-20 flex items-center gap-2 text-white rounded-[1.25rem] bg-main font-sfMedium text-lg"
        >
          <div
            @click="isActive = !isActive"
            class="flex items-center w-[200px] h-[50px] cursor-pointer font-sfMedium text-lg rounded-[20px] justify-between border border-main px-5"
          >
            Videoni ko’rish
            <div
              class="relative rounded-full border border-white p-[3px] before:absolute before:animate-ping before:rounded-full before:border before:border-white before:p-[13px] before:top-[3px] before:left-[3px]"
            >
              <div class="bg-white p-[6px] flex items-center justify-center rounded-full">
                <PlayIcon class="h-4 w-4 text-cBlack" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
