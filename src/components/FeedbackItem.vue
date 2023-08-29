<script setup>
const users = [
  {
    id: 0,
    name: 'Iqbol Xoliqov',
    position: 'Shifokor Nevropotolog',
    img: 'src/assets/iqbol.jpg'
  },
  {
    id: 1,
    name: 'Lola Baxtiyorovna',
    position: 'Dermotolog',
    img: 'src/assets/lola.jpg'
  },
  {
    id: 2,
    name: 'Abrorbek Ibrokhimov',
    position: 'Shifokor Nevropotolog',
    img: 'src/assets/abror.jpg'
  }
]
const descriptions = [
  {
    id: 0,
    title: "Bu ajoyib tajriba bo'ldi",
    rate: '★ ★ ★ ★ ★ ★',
    description:
      "Ularning aksariyati xorijiy yetakchi klinikalarda amaliyot o'tagan va ish tajribasiga ega bo'lgan fan doktori nomzodlari.  </br> </br> Yuqori professionallik va so'nggi tadqiqot usullari bizga nafaqat tashxis qo'yish, balki turli darajadagi murakkablikdagi kasalliklarga chalingan bemorlarni juda samarali davolash imkonini beradi. Agar siz sog'liq muammolari bilan bezovtalansangiz-biz bilan bog'laning, biz sizga yordam beramiz! </br></br>Kabinetlar 'Siemens' (Germaniya), 'Flibs' (Niderlandiya), 'Drager' (Germaniya), 'Karl Storz' (Germaniya) kabi brendlar ostida Yevropa sifatidagi eng zamonaviy uskunalar bilan jihozlangan bo'lib, bu barcha zarur tadqiqotlarni sifatli va tezkor o'tkazish, buzilish va patologiyalarni aniqlash, davolash jarayonini kuzatib borish va kasalliklarning yanada rivojlanishiga yo'l qo'ymaslik imkonini beradi."
  }
]
</script>
<template>
  <div class="flex flex-col h-full">
    <div class="flex flex-col w-[320px] gap-6">
      <div
        v-for="{ id, name, position, img } in users"
        :key="id"
        class="group flex items-center border border-white bg-cWhite justify-center gap-5 w-full py-6 rounded-[20px] hover:bg-white hover:shadow-OurClients"
      >
        <img :src="img" :alt="name" />
        <div class="flex flex-col gap-1">
          <h6 class="text-lg">{{ name }}</h6>
          <span class="group-hover:text-cGray text-cBlack">{{ position }}</span>
        </div>
      </div>
    </div>
  </div>
  <!-- text -->
  <div
    class="max-w-[537px] flex flex-col"
    v-for="{ title, rate, description, id } in descriptions"
    :key="id"
  >
    <h6 class="font-sfBold text-xl">{{ title }}</h6>
    <div class="flex gap-5 mt-2.5 mb-5">
      {{ rate }}
      <!-- <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
      >
        <path
          d="M13.7179 5.73688C13.6786 5.62117 13.6063 5.5195 13.5099 5.44442C13.4135 5.36934 13.2972 5.32413 13.1754 5.31438L9.61224 5.03126L8.07037 1.61813C8.02126 1.5082 7.94139 1.41483 7.8404 1.3493C7.7394 1.28376 7.62159 1.24885 7.5012 1.24878C7.3808 1.24871 7.26295 1.28349 7.16188 1.34892C7.06081 1.41435 6.98084 1.50763 6.93162 1.61751L5.38974 5.03126L1.82662 5.31438C1.7069 5.32387 1.59245 5.36764 1.49696 5.44047C1.40148 5.51329 1.32899 5.61208 1.28818 5.72503C1.24736 5.83797 1.23995 5.96028 1.26683 6.07732C1.29371 6.19437 1.35374 6.30119 1.43974 6.38501L4.07287 8.95188L3.14162 12.9844C3.11334 13.1064 3.1224 13.2342 3.16763 13.351C3.21286 13.4679 3.29216 13.5684 3.39524 13.6397C3.49833 13.7109 3.62044 13.7495 3.74573 13.7504C3.87102 13.7514 3.99371 13.7146 4.09787 13.645L7.50099 11.3763L10.9041 13.645C11.0106 13.7157 11.1361 13.7521 11.2639 13.7493C11.3916 13.7465 11.5155 13.7046 11.6187 13.6293C11.722 13.5541 11.7997 13.449 11.8415 13.3282C11.8832 13.2074 11.887 13.0767 11.8522 12.9538L10.7091 8.95376L13.5441 6.40251C13.7297 6.23501 13.7979 5.97376 13.7179 5.73688Z"
          fill="#F5A623"
        />
      </svg> -->
    </div>
    <p v-html="description"></p>
  </div>
</template>
