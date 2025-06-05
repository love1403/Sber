<template>
  <PageLayout>
    <HeroLayout
      title="СберБанк Онлайн для iOS"
      description="Установите приложение в офисе Сбера, чтобы сохранить быстрый доступ к банковским сервисам"
      imgUrl="/images/hero/hero2.png"
      firstButtonText="СберБанк Онлайн для <br> Android"
      secondButtonText="Веб версия СберБанк <br> Онлайн"
      secondButtonUrl="/web"
      firstButtonUrl="/android"
    >
      <div class="hero-action"><button>Выбрать офис</button></div>
    </HeroLayout>
    <section class="save-guide">
      <div class="save-guide-info">
        <h3>Как сохранить доступ к приложению</h3>
        <p>
          Отключите автоматическое удаление <br />приложений в настройках телефона: <br />
          выберите раздел «App Store» → <br />отключите «Сгружать неиспользуемые»
        </p>
      </div>
      <img src="/images/ios/save-guide.png" alt="" />
    </section>

    <section class="icon-guide">
      <div class="icon-guide-info">
        <h3>Добавьте ярлык веб-версии на экран «Домой»</h3>
        <p>
          Если вам неудобно устанавливать приложение в офисе или с менеджером банка, добавьте ярлык
          веб-версии <br />
          СберБанк Онлайн на домашний экран айфона
        </p>
      </div>

      <div class="icon-guide-list">
        <div class="item">
          <img src="/images/ios/icon-guide1.png" alt="" />
          <div class="item-number">
            <div class="number-blur"></div>
            <span class="number-span">1</span>
          </div>
          <p>
            Откройте сайт <a href="https://online.sberbank.ru/CSAFront/index.do"
              >online.sberbank.ru</a
            >
             в браузере Safari на телефоне. Нажмите на иконку «Поделиться»
          </p>
        </div>
        <div class="item">
          <img src="/images/ios/icon-guide2.png" alt="" />
          <div class="item-number">
            <div class="number-blur"></div>
            <span class="number-span">2</span>
          </div>
          <p>
            Пролистайте меню вниз <br />
            и нажмите на пункт — <br />
            На экран «Домой»
          </p>
        </div>

        <div class="item">
          <img src="/images/ios/icon-guide3.png" alt="" />
          <div class="item-number">
            <div class="number-blur"></div>
            <span class="number-span">3</span>
          </div>
          <p>
            Нажмите «Добавить» в правом <br />верхнем углу. Готово — ярлык <br />
            появится на экране
          </p>
        </div>
      </div>
    </section>
    <AdvantagesSection />
  </PageLayout>
</template>

<script setup>
import PageLayout from '@/components/layouts/PageLayout.vue'
import HeroLayout from '@/components/layouts/HeroLayout.vue'
import AdvantagesSection from '@/components/sections/AdvantagesSection.vue'
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
.save-guide {
  background-color: rgb(122, 199, 205, 0.72);
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  padding: 32px;
  align-items: center;
}
.save-guide-info {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin: 0 auto;
}
.save-guide-info h3 {
  color: #fff;
  font-size: 24px;
  font-weight: 700;
}
.save-guide-info p {
  color: #fff;
  font-size: 16px;
  font-weight: 600;
}
.icon-guide {
  padding: 33px;
}
.icon-guide-info h3 {
  display: flex;
  justify-content: center;
}
.icon-guide-info p {
  display: flex;
  text-align: center;
  padding: 5px;
  line-height: 22px;
}
.icon-guide-list {
  display: flex;
  justify-content: center;
  gap: 15px 70px;
  padding: 25px;
}
.item-number {
  margin: 12px auto;
  color: #ffffff;
  font-size: 36px;
  position: relative;
  height: 60px;
  width: 60px;
}
.number-blur {
  height: 100%;
  width: 100%;
  background-color: #aadecb;
  border-radius: 50%;
  filter: blur(9px);
}
.number-span {
  z-index: 10;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translateY(-50%) translateX(50%);
}
.item p {
  text-align: center;
  font-size: 15px;
}
.item a {
  text-decoration: underline;
  font-size: 15px;
}
</style>
