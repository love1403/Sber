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
}
.layout-content {
  width: 1024px;
  margin: 0 auto;
  padding: 24px;
}
</style>
