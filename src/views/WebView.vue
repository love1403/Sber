<template>
  <PageLayout>
    <HeroLayout
      title="Веб-версия СберБанк Онлайн"
      description="Работает в любом браузере <br> на компьютере, планшете или <br> телефоне. Чтобы доступ к сайту был <br> стабильным и безопасным, <a class='hero-link' href='https://www.gosuslugi.ru/crt'>установите <br> сертификаты Минцифры</a>"
      imgUrl="/images/web/web.png"
      firstButtonText="СберБанк Онлайн для <br> Android"
      secondButtonText="СберБанк Онлайн для <br> iOS"
      secondButtonUrl="/ios"
      firstButtonUrl="/android"
    >
      <div class="hero-action">
        <a href="https://online.sberbank.ru/CSAFront/index.do"><button>СберБанк Онлайн</button></a>
      </div>
    </HeroLayout>
    <section class="login">
      <h2 class="login-title">Найдите свой удобный способ входа</h2>

      <div class="login-block">
        <div class="block-info">
          <h3>По паролю и логину</h3>
          <p>
            Войдите с помощью логина или номера телефона и пароля. Нажмите «Продолжить» и введите
            код подтверждения из СМС. Используйте номер карты Сбера, если входите в СберБанк Онлайн
            в первый раз
          </p>
          <p>Если вы не помните свой логин, попробуйте войти по номеру телефона или карты</p>
        </div>
        <img src="/images/web/login1.png" alt="" />
      </div>

      <div class="login-block">
        <div class="block-info">
          <h3>По коду или биометрии</h3>
          <p>
            Войдите по номеру карты или логину и паролю, а после придумайте код для быстрого входа —
            в следующий раз просто введите его, чтобы войти в СберБанк Онлайн. Код общий для всех
            устройств, на которых вы настраиваете быстрый вход в веб-версию. Если придумываете код
            на новом устройстве или в новом браузере, он обновится везде
          </p>
          <p>
            Чтобы входить ещё быстрее, подключите вход по лицу или отпечатку пальца, если ваш
            планшет или телефон поддерживает эту функцию
          </p>
        </div>
        <img src="/images/web/login2.png" alt="" />
      </div>

      <div class="login-block">
        <div class="block-info">
          <h3>По QR-коду</h3>
          <p>Войти таким способом получится только с приложением СберБанк Онлайн</p>
          <p>
            Выберите на странице входа способ «QR-код» → отсканируйте QR-код в мобильном приложении
            Сбера и нажмите кнопку «Подтвердить» на экране телефона — через несколько секунд
            на компьютере откроется веб-версия СберБанк Онлайн
          </p>
        </div>
        <img src="/images/web/login3.png" alt="" />
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);
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

.login {
  display: flex;
  flex-direction: column;
  gap: 72px;
  margin: 40px 0;
  animation: fadeInUp 0.9s;
}
.login-title {
  font-size: 36px;
  font-weight: 500;
  text-align: center;
  margin-top: 40px;
  animation: fadeIn 1s;
}
.login-block {
  display: flex;
  gap: 46px;
  align-items: center;
  animation: fadeInUp 1s;
}
.login-block:nth-child(even) {
  flex-direction: row-reverse;
}
.block-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 600px;
}
.block-info h3 {
  font-size: 24px;
  font-weight: 500;
  animation: fadeInLeft 1.1s;
}
.block-info p {
  font-size: 20px;
  animation: fadeIn 1.2s;
}
.login-block img {
  width: 320px;
  max-width: 40vw;
  min-width: 240px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: fadeInRight 1.2s;
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
  .login {
    gap: 40px;
    margin: 24px 10px;
  }
  .login-title {
    font-size: 28px;
    margin-top: 24px;
  }
  .login-block {
    flex-direction: column !important;
    gap: 24px;
    align-items: center;
  }
  .block-info {
    max-width: 100%;
    padding: 0 10px;
    text-align: center;
  }
  .block-info h3 {
    font-size: 20px;
  }
  .block-info p {
    font-size: 14px;
  }
  .login-block img {
    width: 80vw;
    max-width: 280px;
    min-width: 120px;
    margin: 0 auto;
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
  .login {
    gap: 24px;
    margin: 16px 6px;
  }
  .login-title {
    font-size: 22px;
    margin-top: 16px;
  }
  .login-block {
    gap: 16px;
  }
  .block-info h3 {
    font-size: 16px;
  }
  .block-info p {
    font-size: 12px;
    line-height: 1.3;
  }
  .login-block img {
    width: 90vw;
    max-width: 300px;
    min-width: 100px;
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
