<template>
  <div class="wrapper" @click="$emit('close')" v-if="isOpen">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: Boolean,
})
defineEmits(['close'])
</script>

<style scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  width: fit-content;
  min-width: 600px;
  padding: 16px 24px;
  background: #fff;
  border-radius: 12px;
}
</style>
