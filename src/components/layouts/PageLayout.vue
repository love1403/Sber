<script setup>
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
</script>

<template>
  <div class="layout">
    <Header />
    <main class="layout-content">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  width: 100vw;
  overflow-x: hidden; /* Предотвращаем горизонтальный скролл */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.layout-content {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 24px;
  flex: 1; /* Занимает все доступное пространство */
  box-sizing: border-box; /* Учитываем padding в ширине */
}

/* Планшетная версия */
@media (max-width: 1024px) {
  .layout-content {
    padding: 20px 16px;
  }
}

/* Мобильная версия */
@media (max-width: 768px) {
  .layout-content {
    padding: 16px 12px;
  }
}

/* Маленькие мобильные устройства */
@media (max-width: 480px) {
  .layout-content {
    padding: 12px 8px;
  }
}
</style>
