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

.save-guide {
  background-color: rgba(122, 199, 205, 0.72);
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  padding: 32px;
  align-items: center;
  margin: 40px 0;
  animation: fadeIn 1.1s;
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
.save-guide img {
  width: 300px;
  max-width: 28vw;
  min-width: 80px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  animation: fadeInRight 1.2s;
}

.icon-guide {
  padding: 33px;
  animation: fadeInUp 0.9s;
}
.icon-guide-info h3 {
  display: flex;
  justify-content: center;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
  animation: fadeInLeft 1.1s;
}
.icon-guide-info p {
  display: flex;
  text-align: center;
  padding: 5px;
  line-height: 22px;
  font-size: 16px;
  animation: fadeIn 1.2s;
}
.icon-guide-list {
  display: flex;
  justify-content: center;
  gap: 15px 70px;
  padding: 25px;
  flex-wrap: wrap;
  animation: fadeInUp 1.1s;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 220px;
  min-width: 120px;
  background: #f8fafb;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  padding: 18px 10px 8px 10px;
  animation: fadeIn 1.2s;
}
.item img {
  width: 300px !important;
  height: auto !important;
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 8px;
  object-fit: contain;
}
.item-number {
  margin: 12px auto 8px auto;
  color: #ffffff;
  font-size: 36px;
  position: relative;
  height: 46px;
  width: 46px;
}
.number-blur {
  height: 100%;
  width: 100%;
  background-color: #aadecb;
  border-radius: 50%;
  filter: blur(7px);
}
.number-span {
  z-index: 10;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translateY(-50%) translateX(50%);
  font-size: 24px;
  font-weight: 700;
}
.item p {
  text-align: center;
  font-size: 15px;
  margin-top: 6px;
}
.item a {
  text-decoration: underline;
  font-size: 15px;
  color: #21a038;
  transition: color 0.2s;
}
.item a:hover {
  color: #18822e;
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
  .save-guide {
    flex-direction: column;
    align-items: center;
    padding: 20px 8px;
    gap: 16px;
    margin: 24px 0;
  }
  .save-guide-info h3 {
    font-size: 18px;
  }
  .save-guide-info p {
    font-size: 13px;
  }
  .save-guide img {
    width: 400px;
    max-width: 40vw;
    min-width: 50px;
    margin-top: 10px;
  }
  .icon-guide {
    padding: 14px 3vw;
  }
  .icon-guide-info h3 {
    font-size: 18px;
  }
  .icon-guide-info p {
    font-size: 13px;
    padding: 2px;
  }
  .icon-guide-list {
    gap: 14px 18px;
    padding: 10px 0;
  }
  .item {
    max-width: 160px;
    min-width: 0;
    padding: 10px 4px 6px 4px;
  }
  .item img {
    width: 100px !important;
    height: auto !important;
  }
  .item-number {
    height: 32px;
    width: 32px;
    font-size: 21px;
  }
  .number-span {
    font-size: 18px;
  }
  .item p,
  .item a {
    font-size: 11px;
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
  .save-guide {
    flex-direction: column;
    align-items: center;
    padding: 8px 2px;
    gap: 8px;
    margin: 12px 0;
  }
  .save-guide-info h3 {
    font-size: 12px;
  }
  .save-guide-info p {
    font-size: 9px;
  }
  .save-guide img {
    display: none;
    width: 70px;
    max-width: 60vw;
    min-width: 30px;
    margin-top: 7px;
  }
  .icon-guide {
    padding: 6px 1vw;
  }
  .icon-guide-info h3 {
    font-size: 11px;
  }
  .icon-guide-info p {
    font-size: 8px;
    line-height: 14px;
    padding: 1px;
  }
  .icon-guide-list {
    gap: 8px 4px;
    padding: 3px 0;
  }
  .item {
    max-width: 98vw;
    min-width: 0;
    padding: 6px 2px 4px 2px;
  }
  .item img {
    width: 80vw !important;
    max-width: 200px !important;
    min-width: 60px;
    height: auto !important;
    margin: 0 auto 8px auto;
    display: block;
  }
  .item-number {
    height: 19px;
    width: 19px;
    font-size: 13px;
  }
  .number-span {
    font-size: 10px;
  }
  .item p,
  .item a {
    font-size: 8px;
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
