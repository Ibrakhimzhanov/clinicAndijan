<script setup>
import { PhoneIcon, UserIcon } from '@heroicons/vue/24/solid'
</script>
<template>
  <form method="post" action="/send.php">
    <div class="bg-[#FFEEE4] h-screen flex items-center justify-center">
      <div
        class="bg-white text-[#AEB5C4] rounded-lg w-full flex flex-col justify-between max-w-[950px] max-h-[440px] h-full p-9"
      >
        <div class="flex flex-col gap-2">
          <h5 class="text-2xl font-sfBold text-cBlack">Biz Bilan Boshlang</h5>
          <p class="text-lg font-sfMedium">Teri kasalliklarini davolash</p>
        </div>
        <div class="flex stify-between w-full h-full">
          <div class="flex flex-col gap-10 w-[430px]">
            <div class="flex flex-col gap-2">
              <h5 class="text-lg font-sfMedium text-cBlack">Ism</h5>
              <div class="flex gap-2 items-center rounded-[10px] p-4 bg-[#F8F9FD]">
                <UserIcon class="h-5 w-5" />
                <input
                  class="bg-transparent outline-none w-full text-cgra placeholder:font-sfRegular placeholder:text-lg"
                  placeholder="Ismingizni kiriting..."
                  v-model="formData.name"
                  type="text"
                  name="name"
                  required
                />
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <h5 class="text-lg font-sfMedium text-cBlack">Telefon raqam</h5>
              <div
                class="flex items-center justify-between gap-2 rounded-[10px] p-[15px] bg-[#F8F9FD]"
              >
                <PhoneIcon class="h-5 w-5" />
                <input
                  class="bg-transparent text-cBlack outline-none w-full placeholder:font-sfRegular placeholder:text-lg"
                  placeholder="+998(00) 000-00-00"
                  v-model="formData.phone"
                  type="text"
                  name="phone"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div class="m-auto">
          <button
            type="submit"
            class="text-lg flex justify-center rounded-[10px] bg-main font-sfMedium text-white py-[11px] w-[430px]"
          />
        </div>
      </div>
    </div>
  </form>
</template>
