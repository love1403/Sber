<template>
  <section class="hero">
    <div class="hero-title">
      <h2>{{ title }}</h2>
    </div>
    <div class="hero-description">
      <p v-html="description"></p>
    </div>
    <div class="hero-action">
      <slot></slot>
    </div>
    <div class="hero-buttons">
      <RouterLink :to="firstButtonUrl">
        <button v-html="firstButtonText"></button>
      </RouterLink>
      <RouterLink :to="secondButtonUrl">
        <button v-html="secondButtonText"></button>
      </RouterLink>
    </div>
    <img :src="imgUrl" alt="" class="hero-img" />
  </section>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  imgUrl: String,
  firstButtonText: String,
  secondButtonText: String,
  firstButtonUrl: String,
  secondButtonUrl: String,
})
</script>

<style scoped>
.hero {
  background: linear-gradient(180deg, rgba(209, 232, 180, 1) 0%, rgba(120, 198, 205, 1) 100%);
  width: 100%;
  padding: 64px;
  position: relative;
  border-radius: 10px;
  margin-bottom: 100px;
  min-height: 340px;
  animation: fadeInUp 0.8s;
}
.hero-title {
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  animation: fadeInLeft 1s;
}
.hero-description {
  font-size: 22px;
  color: #fff;
  width: 60%;
  margin: 36px 0;
  animation: fadeIn 1.2s;
}
.hero-action {
  width: 50%;
  margin-bottom: 30px;
}
.hero-buttons {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -70px;
  display: flex;
  gap: 134px;
  z-index: 2;
}
.hero-buttons button {
  background-color: #90ced3;
  border-radius: 55px;
  box-shadow: 0 4px 6px 0px rgba(0, 0, 0, 0.25);
  padding: 32px;
  font-size: 20px;
  font-weight: 600;
  text-wrap: nowrap;
  color: white;
  border: none;
  transition:
    background 0.2s,
    transform 0.16s;
  animation: fadeIn 1.3s;
}
.hero-buttons button:hover {
  background: #76bfc6;
  transform: scale(1.05);
}
.hero-img {
  position: absolute;
  right: 0;
  bottom: 0;
  max-width: 340px;
  width: 28vw;
  min-width: 140px;
  animation: fadeInRight 1.3s;
}

/* Планшеты */
@media (max-width: 768px) {
  .hero {
    padding: 28px 12px 60px 12px;
    min-height: 220px;
    margin-bottom: 68px;
  }
  .hero-title {
    font-size: 22px;
  }
  .hero-description {
    font-size: 16px;
    width: 90%;
    margin: 20px 0;
  }
  .hero-action {
    width: 100%;
    margin-bottom: 18px;
  }
  .hero-buttons {
    gap: 32px;
    bottom: -48px;
  }
  .hero-buttons button {
    padding: 18px 18px;
    font-size: 15px;
    border-radius: 36px;
  }
  .hero-img {
    max-width: 160px;
    width: 25vw;
    min-width: 80px;
    right: 8px;
    bottom: 8px;
  }
}

/* Мобильные устройства */
@media (max-width: 480px) {
  .hero {
    padding: 14px 4px 48px 4px;
    min-height: 120px;
    margin-bottom: 44px;
  }
  .hero-title {
    font-size: 16px;
    text-align: left;
  }
  .hero-description {
    font-size: 12px;
    width: 100%;
    margin: 10px 0;
    text-align: left;
  }
  .hero-action {
    width: 100%;
    margin-bottom: 100px;
  }
  .hero-buttons {
    flex-direction: column;
    gap: 12px;
    left: 50%;
    bottom: -16px;
    transform: translateX(-50%);
    width: 100%;
    align-items: center;
  }
  .hero-buttons button {
    font-size: 12px;
    padding: 10px 6px;
    border-radius: 18px;
    width: 90vw;
    max-width: 340px;
  }
  .hero-img {
    position: static;
    display: none;
    margin: 18px auto 0 auto;
    width: 70vw;
    max-width: 180px;
    min-width: 60px;
  }
}

/* Анимации */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
