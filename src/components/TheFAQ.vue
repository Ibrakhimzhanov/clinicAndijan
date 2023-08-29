<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import { FAQ } from '../constants'
import { reactive } from 'vue'
import { Collapse } from 'vue-collapsed'
import { MinusIcon, PlusIcon } from '@heroicons/vue/24/solid'

const questions = reactive([
  {
    title: 'Teridagi oq dog’ kasalligini qanday davolash mumkin?',
    answer:
      'Teridagi oq dog’larga Vud lampa uskunasi yordamida va boshqa laborator tekshiruv natijalariga asoslanib aniq tashxis qo’yiladi va davolanadi. Bizning klinikamizda Eksimer lazer yordamida teridagi oq dog’larga Yevropa standarti darajasida davolash o’tkaziladi. Tashxislash uchun ham barcha uskunalar bor',
    isExpanded: false // Initial value
  },
  {
    title: 'Psoriaz kasalligi qanday davolanadi? ',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fus pharetra non loRm nec moncus. Etiam pomkordui n metus auctor vestibulum',
    isExpanded: false
  },
  {
    title: 'Soch ekish og’riqlimi? ',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fus pharetra non loRm nec moncus. Etiam pomkordui n metus auctor vestibulum',
    isExpanded: false
  },
  {
    title: 'So’gal yoki qadoqlarni davolash imkoni bormi? ',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fus pharetra non loRm nec moncus. Etiam pomkordui n metus auctor vestibulum',
    isExpanded: false
  },
  {
    title: 'Xusnbuzar kasalligini to’liq davosi bormi? ',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fus pharetra non loRm nec moncus. Etiam pomkordui n metus auctor vestibulum',
    isExpanded: false
  },
  {
    title: ' Teridagi oq dog’larga gelmint (medda)ning aloqasi bormi?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fus pharetra non loRm nec moncus. Etiam pomkordui n metus auctor vestibulum',
    isExpanded: false
  },
  {
    title: 'SPF ya’ni, terini quyoshdan ximoyalovchi vositalar rostdan ham foyda beradimi? ',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fus pharetra non loRm nec moncus. Etiam pomkordui n metus auctor vestibulum',
    isExpanded: false
  }
])
function handleAccordion(selectedIndex) {
  questions.forEach((_, index) => {
    questions[index].isExpanded = index === selectedIndex ? !questions[index].isExpanded : false
  })
}
</script>

<template>
  <div class="mt-28">
    <SectionHeading :title="FAQ" class="text-center" />

    <div class="flex m-auto px-5 max-w-[870px] w-full flex-col gap-1">
      <div
        v-for="(question, index) in questions"
        :class="`${
          questions[index].isExpanded ? 'bg-[#F8F4FF]' : 'bg-white'
        } flex w-full flex-col items-start justify-between  gap-5 rounded-[15px] border border-[#F8F4FF] xl:px-9 px-5 py-3.5 text-xl`"
        :key="question.title"
      >
        <div class="w-full flex items-center justify-center lg:justify-between">
          <button
            class="w-full h-full flex justify-center lg:justify-normal"
            @click="() => handleAccordion(index)"
          >
            {{ question.title }}
          </button>
          <div class="lg:flex hidden">
            <MinusIcon class="w-6 h-6" v-if="questions[index].isExpanded" />
            <PlusIcon class="w-6 h-6" v-else />
          </div>
        </div>

        <Collapse :when="questions[index].isExpanded" class="v-collapse">
          <p>
            {{ question.answer }}
          </p>
        </Collapse>
      </div>
    </div>
  </div>
</template>
<style scoped>
.v-collapse {
  transition: height 300ms cubic-bezier(0.3, 0, 0.6, 1);
}
</style>
