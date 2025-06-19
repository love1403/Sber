<template>
  <div class="wrapper" :class="alight" @click="$emit('close')" v-if="isOpen">
    <div @click.stop class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: Boolean,
  alight: {
    type: String,
    default: 'top',
  },
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
  z-index: 1000;
}
.center {
  justify-content: center;
  align-items: center;
}
.top {
  justify-content: center;
  align-items: start;
}
.modal {
  width: fit-content;
  min-width: 600px;
  max-width: 95vw;
  padding: 16px 24px;
  background: #fff;
  border-radius: 12px;
  margin: 36px 0;
  box-sizing: border-box;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  transition: all 0.2s;
}

/* Планшеты */
@media (max-width: 768px) {
  .modal {
    min-width: 0;
    width: 90vw;
    max-width: 98vw;
    padding: 14px 10px;
    margin: 24px 0;
    border-radius: 10px;
  }
}

/* Мобильные устройства */
@media (max-width: 480px) {
  .modal {
    width: 98vw;
    max-width: 99vw;
    padding: 10px 2vw;
    margin: 10px 0;
    border-radius: 7px;
  }
}
</style>
