<script setup>
defineProps({
  images: String,
  label: String,
  top: String
})
</script>
<template>
  <img
    :src="images"
    :alt="label"
    :class="`xl:max-w-[509px]  w-[400px] xl:w-full relative top-${top} lg:left-6`"
  />
</template>
