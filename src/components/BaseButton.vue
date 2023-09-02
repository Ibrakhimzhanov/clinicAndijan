<script setup>
import { BUTTON_TYPE_NEUTRAL, BUTTON_TYPE_DANGER } from '../constants'
import { isButtonTypeValid } from '@/validators'
defineProps({
  type: {
    default: BUTTON_TYPE_NEUTRAL,
    type: String,
    validator: isButtonTypeValid
  },
  href: {
    default: '#',
    type: String
  }
})

const typeClasses = {
  [BUTTON_TYPE_DANGER]: 'bg-main text-white tracking-wider justify-center',
  [BUTTON_TYPE_NEUTRAL]: 'justify-between border border-main px-5'
}
</script>
<template>
  <router-link
    :to="`/${href}`"
    :class="`${typeClasses[type]} flex items-center w-[200px] h-[50px] font-sfMedium text-lg rounded-[20px]`"
  >
    <slot></slot>
  </router-link>
</template>
