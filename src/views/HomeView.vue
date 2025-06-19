<script setup>
import PageLayout from '@/components/layouts/PageLayout.vue'
import PopularSection from '@/components/sections/PopularSection.vue'
import DeliveryForm from '@/components/sections/DeliveryForm.vue'
import CurrencySection from '@/components/sections/CurrencySection.vue'
import ModalLayout from '@/components/layouts/ModalLayout.vue'
import CalSection from '@/components/sections/CalSection.vue'
</script>

<template>
  <PageLayout>
    <div class="hero">
      <div class="hero-title">
        Приходите к нам в офис и <br />
        мы установим Вам <br />
        приложение
      </div>
      <img class="img" src="/images/hero/hero.png" alt="" />
    </div>
    <PopularSection />
    <DeliveryForm />
    <CalSection />
    <!-- <CurrencySection /> -->
  </PageLayout>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: stretch;
  justify-content: center;
  margin-bottom: 40px;
  min-height: 220px;
  background: linear-gradient(
    90deg,
    rgba(183, 229, 189, 0.74) 14%,
    rgba(216, 239, 190, 0.76) 32%,
    rgba(244, 247, 188, 0.49) 55%,
    rgba(225, 239, 226, 0.82) 82%,
    rgba(218, 236, 238, 1) 100%
  );
  border-radius: 10px;
  box-sizing: border-box;
}

.hero-title {
  font-size: 28px;
  letter-spacing: 4px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 44px;
  width: 100%;
  border-radius: 10px 0 0 10px;
  min-height: 220px;
  background: transparent; /* Убрали фон */
}

.img {
  border-radius: 0 10px 10px 0;
  width: 260px;
  object-fit: cover;
  min-width: 120px;
}

/* Планшеты */
@media (max-width: 768px) {
  .hero {
    min-height: 160px;
    margin-bottom: 28px;
  }
  .hero-title {
    font-size: 22px;
    padding: 0 24px;
    letter-spacing: 2px;
    min-height: 160px;
  }
  .img {
    width: 180px;
    min-width: 80px;
  }
}

/* Мобильные устройства */
@media (max-width: 480px) {
  .hero {
    flex-direction: column;
    align-items: center;
    min-height: unset;
    margin-bottom: 18px;
  }
  .hero-title {
    border-radius: 10px 10px 0 0;
    font-size: 17px;
    padding: 20px 10px;
    min-height: unset;
    width: 100%;
    letter-spacing: 1px;
    background: transparent;
  }
  .img {
    border-radius: 0 0 10px 10px;
    width: 100%;
    min-width: 0;
    max-width: 340px;
    margin: 0 auto;
    display: none;
  }
}
</style>
