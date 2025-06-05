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
        <img src="/images/web/login1.png" alt="" />
        <div class="block-info">
          <h3>По паролю и логину</h3>
          <p>
            Войдите с помощью логина или номера телефона и пароля. Нажмите «Продолжить» и введите
            код подтверждения из СМС. Используйте номер карты Сбера, если входите в СберБанк Онлайн
            в первый раз
          </p>
          <p>Если вы не помните свой логин, попробуйте войти по номеру телефона или карты</p>
        </div>
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
        <img src="/images/web/login3.png" alt="" />
        <div class="block-info">
          <h3>По QR-коду</h3>
          <p>Войти таким способом получится только с приложением СберБанк Онлайн</p>
          <p>
            Выберите на странице входа способ «QR-код» → отсканируйте QR-код в мобильном приложении
            Сбера и нажмите кнопку «Подтвердить» на экране телефона — через несколько секунд
            на компьютере откроется веб-версия СберБанк Онлайн
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
.login {
  display: flex;
  flex-direction: column;
  gap: 72px;
}
.login-title {
  font-size: 36px;
  font-weight: 500;
  text-align: center;
  margin-top: 40px;
}
.login-block {
  display: flex;
  gap: 46px;
  align-items: center;
}
.block-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.block-info h3 {
  font-size: 24px;
  font-weight: 500;
}
.block-info p {
  font-size: 20px;
}
</style>
