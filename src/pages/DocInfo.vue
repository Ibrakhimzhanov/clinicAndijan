<script setup>
const props = defineProps(['doctorName', 'img', 'position'])

console.log(props)
</script>
<template>
  <div
    class="m-auto flex flex-col shadow-DoctorsShadow rounded-[20px] pt-36 border border-[#F8F4FF] max-w-[1090px] items-center justify-center relative top-[110px] max-h-[600px] p-[50px]"
  >
    <div class="flex w-full items-start justify-between">
      <div class="flex flex-col gap-10">
        <img
          class="border border-[#99E9A5] rounded-[20px] max-w-[192px]"
          :src="props.img"
          alt="Axrorbek Abduraxmanov"
        />
        <router-link
          :to="{ name: 'appointment', params: { doctorName: props.doctorName } }"
          class="flex items-center justify-center text-white rounded-[20px] border border-transparent bg-main px-[1.9rem] py-[7.5px] text-lg"
        >
          Qabulga yozilish
        </router-link>
      </div>
      <div class="flex flex-col">
        <div class="flex flex-col gap-2 rounded-[20px] border border-[#99E9A5] p-[20px]">
          <h6 class="m-0 p-0 font-sfBold text-3xl">{{ props.doctorName }}</h6>
          <span class="w-full text-2xl text-cGray">{{ props.position }}</span>
          <p class="max-w-[542px] text-[16px] group-hover:text-black">
            Bu bolalik orzusi edi, yoshligimdan shifokor bo'lishimni aniq bilardim. Barchangizni
            berib, odamlarga yordam bering. Men uchun eng oliy mukofot - bemorning sog'lom go'zal
            tabassumdan quvonchini ko'rishdir.
          </p>
        </div>
        <div class="flex flex-col gap-4 p-[20px]">
          <h6 class="my-5 font-sfMedium text-2xl">Ta'lim muassasalari va kurslar</h6>
          <span>I.M.Sechenov nomidagi Birinchi Moskva davlat tibbiyot universiteti, 2017 yil </span>
          <p>
            A.I. nomidagi Moskva davlat tibbiyot va stomatologiya universitetida rezidentura.
            Evdokimov, 2019 yil
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
