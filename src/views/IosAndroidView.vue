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
}
.hero-action button {
  background-color: #fff;
  color: #525252;
  font-weight: 700;
  border-radius: 18px;
  font-size: 20px;
  box-shadow: 0 4px;
  -webkit-box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  padding: 10px 8px;
}
.ofice-map {
  display: flex;
  justify-content: center;
  padding-bottom: 60px;
}
.guide {
  display: flex;
  flex-direction: column;
  gap: 80px;
}
.guide-block {
  display: flex;
  justify-content: space-between;
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
}
.guide-block-info p {
  color: #000000;
  font-weight: 200;
  padding: 28px;
  font-size: 24px;
  text-align: center;
}
.guide-block-info button {
  background-color: #21a038;
  border-radius: 12px;
  padding: 8px 20px;
  box-shadow: 0 4px;
  -webkit-box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  font-weight: 400;
  font-size: 20px;
}
</style>
