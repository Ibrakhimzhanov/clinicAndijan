<template>
  <div
    class="m-auto flex flex-col shadow-DoctorsShadow rounded-[20px] border border-[#F8F4FF] max-w-[1090px] items-center justify-center relative top-[110px] max-h-[600px] p-[50px]"
  >
    <div class="flex w-full items-center gap-24">
      <div class="flex flex-col gap-10">
        <img
          class="border border-[#99E9A5] rounded-[20px] max-w-[192px]"
          src="@/assets/Axrorbek.jpg"
          alt="Axrorbek Abduraxmanov"
        />
        <router-link
          :to="{ name: 'appointment', params: { doctorName: 'Axrorbek Abduraxmanov' } }"
          class="flex items-center justify-center text-white rounded-[20px] border border-transparent bg-main px-[1.9rem] py-[7.5px] text-lg"
        >
          Qabulga yozilish
        </router-link>
      </div>
      <div class="flex flex-col">
        <div class="flex flex-col gap-2 rounded-[20px] border border-[#99E9A5] p-[20px]">
          <h6 class="m-0 p-0 font-sfBold text-3xl">Axrorbek Abduraxmanov</h6>
          <span class="w-full text-2xl text-cGray">Dermotolog</span>
          <p class="max-w-[742px] text-[16px] group-hover:text-black">
            1990-yilda Andijon shahrida tug’ilgan. 2017-yildan Dermatolog mutaxassisi sifatida
            xizmat ko’rsatadi. Andijon davlat tibbiyot institutida katta o’qituvchi lavozimida
            ishlaydi. 6 yillik faoliyati davomida ko’plab teri kasalliklari bilan aziyat chekkan
            insonlarni davolagan. Asosan, vitiligo (oq dog’ kasalligi), psoriaz, husnbuzar, ekzema
            kabi teridagi murakkab kasalliklarni tashxislash va davolash amaliyoti bo’yicha
            Germaniya davlatining yetuk mutaxassislari bilan hamkorlik qilib keladi. <br />
            <br />
            Tirnoqdagi o’zgarishlarni davolashni yo’lga qo’yish maqsadida podologiya kursini
            tamomlab, podologiya bo’yicha murakkab amaliyotlarni yo’lga qo’ygan. Shuningdek, soch
            to’kilishi haqidagi fan, ya’ni trixologiya fanini ham mukammal egallab, soch
            to’kilishining konservativ davosi va soch ekish (FUE) amaliyotini ham mukammal amalga
            oshirmoqda.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
