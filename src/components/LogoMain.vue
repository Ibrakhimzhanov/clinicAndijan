<script setup>
defineProps({
  isFooter: {
    default: false,
    type: Boolean
  }
})
</script>
<template>
  <router-link
    to="/Asosiy"
    :class="`${isFooter ? 'w-[300px] h-[90px]' : 'w-[170px] h-[50px]'} flex items-center`"
  >
    <img src="../assets/logo.svg" alt="Logotype" class="w-full" />
  </router-link>
</template>
