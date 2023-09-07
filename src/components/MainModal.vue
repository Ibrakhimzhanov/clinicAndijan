<script setup>
defineProps({
  isOpen: {
    required: true,
    type: Boolean
  }
})
</script>

<template>
  <Transition name="modal">
    <div
      v-if="isOpen"
      class="modal-mask fixed z-[9999] top-0 left-0 w-full h-full bg-[rgba(0, 0, 0, 0.5)] flex transition-opacity ease-linear delay-300"
    >
      <div
        class="modal-container w-full h-full m-auto py-5 px-7 bg-[#718192] rounded-sm shadow-[0 2px 8px rgba(0, 0, 0, 0.33)] transition delay-300 ease-linear flex items-center justify-center"
      >
        <div class="modal-about">
          <slot name="about"></slot>
        </div>
        <div class="modal-main">
          <slot name="main"> </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
