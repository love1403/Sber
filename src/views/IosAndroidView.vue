<template>
  <PageLayout>
    <HeroLayout
      title="СберБанк Онлайн для iOS и Android"
      description="Установите приложение в офисе Сбера, чтобы сохранить быстрый доступ к банковским сервисам"
      imgUrl="/images/hero/hero1.png"
      firstButtonText="СберБанк Онлайн для <br> Android"
      secondButtonText="СберБанк Онлайн для <br> iOS"
      secondButtonUrl="/ios"
      firstButtonUrl="/android"
    >
      <div class="hero-action">
        <a href="#ofisemap"><button>Выбрать офис</button></a>
      </div>
    </HeroLayout>
    <section class="ofice-map">
      <iframe
        id="ofisemap"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A888da00ef19754038ae16baee5d536b0f68cb076ea0277748f54e39eff88e47c&amp;source=constructor"
        width="900"
        height="500"
        frameborder="0"
      ></iframe>
    </section>
    <section class="guide">
      <div class="guide-block">
        <img src="/images/iosandroid/guide-ios.png" alt="" />
        <div class="guide-block-info">
          <h3>СберБанк Онлайн для iOS</h3>
          <p>
            Установим приложение на ваш айфон в офисе <br />
            банка. Скачать приложение в App Store,<br />
            к сожалению, не получится.
          </p>
          <RouterLink to="/Ios"> <button>Подробнее</button></RouterLink>
        </div>
      </div>
      <div class="guide-block">
        <div class="guide-block-info">
          <h3>Веб-версия СберБанк Онлайн</h3>
          <p>
            Пользуйтесь онлайн-сервисами банка <br />
            с телефона, компьютера или планшета. Для <br />
            стабильной работы рекомендуем <br />
            установить сертификаты Минцифры.
          </p>
          <RouterLink to="/Web"><button>Подробнее</button></RouterLink>
        </div>
        <img src="/images/iosandroid/guide-web.png" alt="" />
      </div>
    </section>
  </PageLayout>
</template>

<script setup>
import PageLayout from '@/components/layouts/PageLayout.vue'
import HeroLayout from '@/components/layouts/HeroLayout.vue'
</script>

<style scoped>
.hero-action {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  animation: fadeInUp 0.7s;
}
.hero-action button {
  background-color: #fff;
  color: #525252;
  font-weight: 700;
  border-radius: 18px;
  font-size: 20px;
  box-shadow: 0 4px 6px 0px rgba(0, 0, 0, 0.25);
  padding: 10px 28px;
  transition:
    background 0.2s,
    color 0.2s,
    transform 0.18s;
  animation: fadeIn 1s;
}
.hero-action button:hover {
  background: #f3f3f3;
  color: #21a038;
  transform: scale(1.04);
}
.ofice-map {
  display: flex;
  justify-content: center;
  padding-bottom: 60px;
  animation: fadeIn 1.1s;
}
.ofice-map iframe {
  border-radius: 24px;
  box-shadow: 0 4px 16px 0px rgba(0, 0, 0, 0.13);
  transition: box-shadow 0.2s;
}
.guide {
  display: flex;
  flex-direction: column;
  gap: 80px;
  animation: fadeInUp 0.9s;
}

.guide-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  animation: fadeInUp 1s;
  background: #f8fafb;
  border-radius: 18px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  padding: 32px 28px;
}

.guide-block img {
  width: 320px;
  max-width: 36vw;
  min-width: 120px;
  border-radius: 18px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1.2s;
  object-fit: contain;
}

.guide-block-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.guide-block-info h3 {
  color: #000000;
  font-weight: 600;
  font-size: 36px;
  text-align: center;
  animation: fadeInLeft 1.1s;
}

.guide-block-info p {
  color: #000000;
  font-weight: 200;
  padding: 28px;
  font-size: 24px;
  text-align: center;
  animation: fadeIn 1.3s;
}

.guide-block-info button {
  background-color: #21a038;
  border-radius: 12px;
  padding: 8px 20px;
  box-shadow: 0 4px 6px 0px rgba(0, 0, 0, 0.25);
  font-weight: 400;
  font-size: 20px;
  color: #fff;
  transition:
    background 0.2s,
    transform 0.16s;
  animation: fadeInUp 1.2s;
  border: none;
  margin-top: 10px;
}
.guide-block-info button:hover {
  background: #18822e;
  transform: scale(1.05);
}

/* Планшеты */
@media (max-width: 768px) {
  .hero-action {
    height: 70px;
  }
  .hero-action button {
    font-size: 16px;
    padding: 8px 16px;
  }
  .ofice-map {
    padding-bottom: 36px;
  }
  .ofice-map iframe {
    width: 98vw !important;
    height: 320px !important;
    border-radius: 14px;
  }
  .guide {
    gap: 36px;
  }
  .guide-block {
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
    padding: 18px 8px;
  }
  .guide-block img {
    width: 80vw;
    max-width: 320px;
    min-width: 0;
    margin: 0 auto 10px auto;
    border-radius: 12px;
  }
  .guide-block-info {
    align-items: center;
    padding: 0 4vw;
  }
  .guide-block-info h3 {
    font-size: 22px;
  }
  .guide-block-info p {
    font-size: 15px;
    padding: 10px 0;
  }
  .guide-block-info button {
    font-size: 15px;
    padding: 7px 14px;
  }
}

/* Мобильные устройства */
@media (max-width: 480px) {
  .hero-action {
    height: 46px;
  }
  .hero-action button {
    font-size: 13px;
    padding: 5px 7px;
    border-radius: 9px;
  }
  .ofice-map {
    padding-bottom: 18px;
  }
  .ofice-map iframe {
    width: 99vw !important;
    height: 180px !important;
    border-radius: 8px;
  }
  .guide {
    gap: 14px;
  }
  .guide-block {
    padding: 8px 2px;
    gap: 10px;
  }
  .guide-block img {
    width: 98vw;
    max-width: 180px;
    min-width: 0;
    margin: 0 auto 7px auto;
    border-radius: 8px;
  }
  .guide-block-info {
    padding: 0 2vw;
  }
  .guide-block-info h3 {
    font-size: 14px;
  }
  .guide-block-info p {
    font-size: 10px;
    padding: 4px 0;
  }
  .guide-block-info button {
    font-size: 11px;
    padding: 5px 8px;
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
</style>
