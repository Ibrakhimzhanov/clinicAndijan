<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import { ref } from 'vue'
import { ABOUT } from '../constants'
import { PlayIcon, XCircleIcon } from '@heroicons/vue/24/solid'
import MainModal from './MainModal.vue'
let isOpen = ref(false)
</script>

<template>
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
            @click="isOpen = true"
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
      <Teleport to="body">
        <MainModal :is-open="isOpen" @close="isOpen = false">
          <template #about>
            <button
              class="flex justify-end w-full mb-5 text-lg text-white font-sfSemi border-transparent gap-2 items-center"
              @click="isOpen = false"
            >
              Close<XCircleIcon class="h-5 text-main" />
            </button>
            <iframe
              width="1280"
              height="720"
              src="https://www.youtube.com/embed/Z-k_7xx1nLs?si=WQW-INnJecrmWJjx"
              title="AnDerma clinikasi"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </template>
        </MainModal>
      </Teleport>
    </div>
  </div>
</template>
