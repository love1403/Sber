<script setup>
import PageLayout from '@/components/layouts/PageLayout.vue'
import PopularSection from '@/components/sections/PopularSection.vue'
import DeliveryForm from '@/components/sections/DeliveryForm.vue'
import CurrencySection from '@/components/sections/CurrencySection.vue'
import ModalLayout from '@/components/layouts/ModalLayout.vue'
</script>

<template>
  <PageLayout>
    <div class="hero">
      <div class="hero-title">
        Приходите к нам в офис и <br />
        мы установим Вам <br />
        приложение
      </div>
      <img class="img" src="/images/herologo.jpg" alt="" />
    </div>
    <PopularSection />
    <DeliveryForm />
    <CurrencySection />
  </PageLayout>
</template>

<style scoped>
.hero {
  display: flex;
}
.hero-title {
  background: rgb(183, 229, 189);
  background: linear-gradient(
    90deg,
    rgba(183, 229, 189, 0.7399334733893557) 14%,
    rgba(216, 239, 190, 0.7567401960784313) 32%,
    rgba(244, 247, 188, 0.48503151260504207) 55%,
    rgba(225, 239, 226, 0.8155637254901961) 82%,
    rgba(218, 236, 238, 1) 100%
  );
  font-size: 28px;
  letter-spacing: 4px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 44px;
  width: 100%;
  border-radius: 10px 0 0 10px;
}
.img {
  border-radius: 0 10px 10px 0;
}
</style>
