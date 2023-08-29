<script setup>
import { EnvelopeIcon, EyeSlashIcon, LockClosedIcon } from '@heroicons/vue/24/solid'
</script>
<template>
  <div class="bg-[#FFEEE4] h-screen flex items-center justify-center">
    <div
      class="bg-white text-[#AEB5C4] rounded-lg w-full flex flex-col justify-between max-w-[500px] max-h-[515px] h-full p-9"
    >
      <div class="flex flex-col gap-3">
        <h5 class="text-2xl font-sfBold text-cBlack">Salom, Xush Kelibsiz!</h5>
        <p class="text-lg font-sfMedium">Teridagi muammoga davo izlayotganlar uchun</p>
      </div>
      <div class="flex flex-col gap-2">
        <h5 class="text-lg font-sfMedium text-cBlack">Email</h5>
        <div class="flex gap-2 items-center rounded-[10px] p-4 bg-[#F8F9FD]">
          <EnvelopeIcon class="h-5 w-5" />
          <input
            class="bg-transparent outline-none w-full text-cBlack placeholder:font-sfRegular placeholder:text-lg"
            type="email"
            placeholder="example@something.com"
          />
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <h5 class="text-lg font-sfMedium text-cBlack">Parol</h5>
        <div class="flex items-center justify-between gap-2 rounded-[10px] p-[15px] bg-[#F8F9FD]">
          <LockClosedIcon class="h-5 w-5" />
          <input
            class="bg-transparent text-cBlack placeholder:relative placeholder:top-1.5 outline-none w-full placeholder:font-sfRegular placeholder:text-lg"
            type="password"
            placeholder="**************"
          />
          <EyeSlashIcon class="h-5 w-5" />
        </div>
      </div>
      <div class="flex w-full justify-between">
        <div class="flex gap-2">
          <input type="checkbox" name="remember" id="remember" />
          <label for="remember" class="cursor-pointer text-lg font-sfMedium">Eslab qolish</label>
        </div>
        <a href="#" class="text-lg border border-transparent hover:border-b-cGray"
          >Parolni unutdingizmi?</a
        >
      </div>
    </div>
  </div>
</template>
