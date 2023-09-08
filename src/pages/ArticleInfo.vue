<script setup>
import { ARTICLES } from '../constants'
import { cards } from '../data'
import SectionHeading from '../components/SectionHeading.vue'
</script>
<template>
  <div class="flex items-center flex-col gap-10 justify-center h-full w-full pt-48">
    <img src="../assets/article.jpg" alt="Article" />
    <h1 class="font-sfBold text-5xl text-cBlack max-w-[900px] w-full">
      Litvada plastik jarrohlik - sizni hayratda qoldiradi!
    </h1>
    <div class="flex flex-col text-lg gap-3 max-w-[900px]">
      <p>
        Plastik operatsiya - kishi organizmidagi shikastlangan biror aʼzoning shakli va funksiyasini
        qayta tiklash, tugʻma va hayotda orttirilgan nuqson, kamchiliklarni toʻgʻrilash. Plastik
        xirurgiyada toʻqimalarning joyi oʻzgartiriladi, bemor gavdasining boshqa qis-midan olingan
        toʻqimalar koʻchirib oʻtkaziladi (autoplastika, autotrans-plantatsiya); bemorga boshqa
        odamdan (allotransplantatsiya) yoki hayvondan olingan toʻqimalar koʻchirib oʻtkazila-di;
        bemor toʻqimalariga, organizmiga yot, biroq unga beziyon materiallar (metall, plastmassa,
        sintetik tola va boshqalar)dan yasalgan turli narsalar singdiriladi (implantatsiya). Plastik
        xirurgiya yordamida bemor yuzidan tugʻma va orttirilgan nuqsonlar (lab tirtikligi, burun
        yoʻqdigi, tortib tu-radigan chandiqlar) bartaraf etiladi.
      </p>
      <p>
        Terini koʻchirib oʻtkazish bilan amalga oshiriladigan Plastik xirurgiyak kuyganda, kosme-tik
        maqsadlarda yuzdagi ajinlar, teri burmalari, oʻsmalar va boshqalarni yoʻqotishda keng
        qoʻllanadi. Suyak Plastik xirurgiyasi suyaklarning turli deformatsiyalarida, sox-ta
        boʻgʻimda, umurtqa pogʻonasi kasalliklarida oʻtkaziladi. Bemorning oʻz toʻqimasidan
        foydalanilsa, koʻchirib oʻtkazish ayniqsa muvaffaqiyatli chiqadi. Koʻchirib oʻtkazishda
        bemorning asli suyagi maʼlum vaqtdan soʻng soʻrilib ketadi, biroq yangi suyak toʻqima-sining
        oʻsib chiqishiga asos boʻladi.
      </p>
      <p>
        Organizmga yot materiallarni singdirish operatsiyalari muvaffaqiyatli amalga oshirilmoqda.
        Bularga oddiy operatsiyalar (burun shaklini terisi ostiga parafin yuborib tuzatish) dan
        tortib murakkab zamonaviy operatsiyalargacha (qon tomirni sintetik toʻqimadan yasalgan
        protez bilan, yirik tomirni unga singdirilgan metall konstruksiya bilan almashtirish, yurak
        kla-panlarini protezlash) kiradi.
      </p>
    </div>
    <div :id="ARTICLES" class="pt-20">
      <SectionHeading title="Maqolalar" />
      <div class="flex gap-5">
        <div
          v-for="{ id, label, title, subtitle, text } in cards"
          :key="id"
          class="group hover:transition hover:scale-110 flex border border-[#F8F4FF] w-[240px] flex-col gap-5 rounded-xl p-5 text-cBlack"
        >
          <h6 class="font-sfMedium text-xl" v-html="title" />
          <span class="font-sfRegular text-lg" v-html="subtitle" />
          <p class="text-cGray">
            {{ text }}
          </p>
          <div class="mt-6 flex gap-4">
            <a href="#" class="text-cGray group-hover:text-cBlack">{{ label }}</a>
            <img class="text-cGray group-hover:text-cBlack" src="@/assets/arrow.svg" alt="Arrow" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
