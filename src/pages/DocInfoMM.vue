<template>
  <div class="px-5 flex justify-center items-center h-full pt-28">
    <div
      class="m-auto flex flex-col relative shadow-DoctorsShadow rounded-[20px] border border-[#F8F4FF] max-w-[1090px] items-center justify-center h-auto p-10"
    >
      <div class="flex lg:flex-row flex-col lg:my-0 w-full items-center gap-24">
        <div class="flex flex-col gap-10">
          <img
            class="border border-[#99E9A5] rounded-[20px] max-w-[192px]"
            src="@/assets/Murodjon.jpg"
            alt="Murodjon Mo'minov"
          />
          <router-link
            :to="{ name: 'appointment', params: { doctorName: 'Murodjon Mo\'minov' } }"
            class="flex items-center justify-center text-white rounded-[20px] border border-transparent bg-main px-[1.9rem] py-[7.5px] text-lg"
          >
            Qabulga yozilish
          </router-link>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col gap-2 rounded-[20px] border border-[#99E9A5] p-[20px]">
            <h6 class="m-0 p-0 font-sfBold text-3xl">Murodjon Mo'minov</h6>
            <span class="w-full text-2xl text-cGray">Dermotolog</span>
            <p class="max-w-[742px] text-[16px] group-hover:text-black">
              1990-yilda Buloqboshi tumanida tug’ilgan. 2017-yildan Dermatolog mutaxassisi sifatida
              xizmat ko’rsatadi. Andijon davlat tibbiyot institutida o’qituvchi lavozimida ishlaydi.
              6 yillik faoliyati davomida ko’plab teri kasalliklari bilan aziyat chekkan insonlarni
              davolagan. <br />
              <br />
              Asosan, vitiligo (oq dog’ kasalligi), psoriaz, ekzema kabi teridagi murakkab
              kasalliklarni tashxislash va davolash, shuningdek kriodestruktor va elektrokoagulyator
              uskunalari yordamida so’gal, qadoq va papillomalarni davolash amaliyoti bo’yicha katta
              tajribaga ega.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
