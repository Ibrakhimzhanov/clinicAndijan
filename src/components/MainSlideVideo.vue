<script setup>
import { computed } from 'vue'

defineProps({
  videoId: String,
  showModal: {
    type: Boolean
  }
})
const youtubeUrl = computed(() => `https://www.youtube.com/embed/${this.videoId}`)
const closeModal = () => {
  this.$emit('close')
}
</script>
<template>
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <iframe width="560" height="315" :src="youtubeUrl" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</template>
<style scoped>
/* Стили модального окна */
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  position: relative;
  margin: auto;
  width: 80%;
  max-width: 800px;
  background-color: #fefefe;
  padding: 20px;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
}
</style>
