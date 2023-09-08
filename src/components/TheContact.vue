<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import { CONTACT } from '../constants'
</script>
<template>
  <div :id="CONTACT" class="lg:pt-36 pt-20">
    <SectionHeading :title="CONTACT" />
    <div
      class="m-auto flex lg:flex-row gap-10 flex-col p-5 max-w-[1090px] items-center justify-between"
    >
      <div
        class="flex flex-col sm:flex-row lg:flex-col w-full items-start justify-between font-sfBold"
      >
        <div class="flex flex-col gap-10">
          <h6 class="text-xl text-cGray">AnDerma Clinikasi</h6>
          <div style="position: relative; overflow: hidden">
            <a
              href="https://yandex.uz/maps/org/anderma/197928513625/?utm_medium=mapframe&utm_source=maps"
              style="color: #eee; font-size: 12px; position: absolute; top: 0px"
              >AnDerma</a
            ><a
              href="https://yandex.uz/maps/10329/andijan/category/hospital/184105956/?utm_medium=mapframe&utm_source=maps"
              style="color: #eee; font-size: 12px; position: absolute; top: 14px"
              >Больница для взрослых в Андижане</a
            ><iframe
              src="https://yandex.uz/map-widget/v1/?ll=72.324494%2C40.810027&mode=search&oid=197928513625&ol=biz&z=19.22"
              width="300"
              height="200"
              frameborder="1"
              allowfullscreen="true"
              style="position: relative"
            ></iframe>
          </div>

          <h5 class="max-w-[251px] w-full text-2xl font-sfMedium">
            Andijon shahar, Ahmad Donish ko'chasi 4-uy
          </h5>
          <span class="text-lg text-cGray font-sfMedium"
            >Mo'ljal: Sanchast shifoxonasi ko'chasida</span
          >
        </div>
        <div class="flex flex-col gap-2 text-white">
          <div class="font-sfMedium text-2xl text-cBlack mb-3">Telefon raqamlarimiz</div>
          <a
            href="tel:+998956042222"
            class="text-md flex items-center justify-center rounded-[1.25rem] border bg-main px-[1.9rem] py-[0.665rem] font-sfMedium text-[18px]"
            >+998 (95) 604 - 22 - 22
          </a>
          <a
            href="tel:+998902168001"
            class="text-md flex items-center justify-center rounded-[1.25rem] border bg-main px-[1.9rem] py-[0.665rem] font-sfMedium text-[18px]"
            >+998 (90) 216 - 80 - 01
          </a>
          <a
            href="tel:+998901421617"
            class="text-md flex items-center justify-center rounded-[1.25rem] border bg-main px-[1.9rem] py-[0.665rem] font-sfMedium text-[18px]"
            >+998 (90) 142 - 16 - 17
          </a>
        </div>
      </div>
      <img src="../assets/contacts.jpg" alt="Our plan" />
    </div>
  </div>
</template>
