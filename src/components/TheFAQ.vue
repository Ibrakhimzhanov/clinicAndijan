<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import { FAQ } from '@/constants'
import { faqQuestions as questions } from '@/data'
import { Collapse } from 'vue-collapsed'
import { MinusIcon, PlusIcon } from '@heroicons/vue/24/solid'
import { handleAccordion } from '@/function'
</script>

<template>
  <div class="lg:pt-36 pt-20">
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
          <p v-html="question.answer"></p>
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
