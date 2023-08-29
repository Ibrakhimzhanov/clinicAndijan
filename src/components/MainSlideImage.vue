<script setup>
defineProps({
  images: {
    type: String
  }
})
</script>
<template>
  <img :src="`${images}`" alt="Teri kassalliklarini davolash" class="w-[509px] relative top-2" />
</template>
