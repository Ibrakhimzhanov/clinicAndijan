<script setup>
import { ChatBubbleOvalLeftEllipsisIcon, PhoneIcon, UserIcon } from '@heroicons/vue/24/solid'
import axios from 'axios'
import { ref } from 'vue'
import { router } from '../router'

const props = defineProps(['doctorName'])

const name = ref('')
const phone = ref('')
const subject = ref('')

const token = ''
const chatId = ''
const urlApi = `https://api.telegram.org/bot${token}/sendMessage`

let isLoading = ref(false)
const submit = () => {
  const fullMessage = `<b>✉ Saytdan ariza!</b>\n\n\t<b>✅ Ismi: </b> ${name.value}\n<b>📞 Telefon raqami: </b>${phone.value}\n<b>✍ Izoh: </b>${subject.value}\n <b>Doctor: </b> ${props.doctorName}`
  isLoading.value = true
  axios
    .post(urlApi, {
      chat_id: chatId,
      parse_mode: 'html',
      text: fullMessage
    })
    .then(() => {
      router.push({ name: 'Thanks' })
    })
    .catch((err) => {
      console.warn(err)
      router.push({ name: 'Error' })
    })
}
setTimeout(() => {
  isLoading.value = false
}, 5000)
</script>

<template>
  <form method="POST" @submit.prevent="submit">
    <div class="pt-36 flex items-center justify-center">
      <div
        class="bg-white shadow-3xl border border-opacity-30 border-main text-[#AEB5C4] rounded-lg w-full flex flex-col justify-between max-w-[450px] p-9"
      >
        <div class="flex flex-col gap-5">
          <h5 class="text-2xl font-sfBold text-cBlack">Biz Bilan Bog'laning</h5>
          <p class="text-lg font-sfMedium">Teri kasalliklarini davolash</p>
        </div>
        <div class="flex w-full h-full py-10">
          <div class="flex flex-col justify-around w-[430px]">
            <div class="flex flex-col gap-2">
              <h5 class="text-lg font-sfMedium text-cBlack">Ism</h5>
              <div class="flex gap-2 items-center rounded-[10px] p-4 bg-[#F8F9FD]">
                <UserIcon class="h-5 w-5" />
                <input
                  class="bg-transparent outline-none w-full text-cgra placeholder:font-sfRegular placeholder:text-lg"
                  placeholder="Ismingizni kiriting..."
                  v-model="name"
                  type="text"
                  name="subject"
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
                  v-model="phone"
                  type="text"
                  name="phone"
                  required
                />
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <h5 class="text-lg font-sfMedium text-cBlack">Izoh</h5>
              <div
                class="flex items-center justify-start gap-2 rounded-[10px] p-[15px] bg-[#F8F9FD]"
              >
                <ChatBubbleOvalLeftEllipsisIcon class="h-5 w-5" />
                <input
                  class="bg-transparent w-full flex flex-wrap text-cBlack outline-none placeholder:font-sfRegular placeholder:text-lg"
                  placeholder="Iltimos izohingizni qoldiring..."
                  v-model="subject"
                  name="text"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <input
            type="submit"
            value="Yuborish"
            class="text-lg w-[200px] h-[50px] cursor-pointer flex justify-center rounded-[20px] bg-main font-sfMedium text-white"
          />
        </div>
      </div>
    </div>
  </form>
  <div
    id="loader"
    :class="`${
      isLoading ? 'block' : 'hidden'
    } fixed top-0 bottom-0 overflow-hidden  left-0 right-0 w-full bg-white  bg-[url(/loading.gif)] bg-no-repeat  bg-center z-[1000]`"
  ></div>
</template>
