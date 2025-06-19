<script setup>
import { ref } from 'vue'
import ModalLayout from '../layouts/ModalLayout.vue'

const isOpenAndroidInstalModal = ref(false)

const OpenAndroidInstalModal = () => {
  isOpenAndroidInstalModal.value = true
}
const CloseAndroidInstalModal = () => {
  isOpenAndroidInstalModal.value = false
}
</script>

<template>
  <section class="popular">
    <h2 class="popular-title">Популярное</h2>
    <div class="popular-content">
      <div class="grid">
        <div class="grid-row">
          <div class="grid-item size2">
            <p class="title">Ставки по вкладу до 15%</p>
            <p class="discript">Откройте «Лучший %» на максимально выгодных условиях</p>
            <img src="/images/popular-section/1.svg" alt="" />
          </div>

          <div class="grid-item size1">
            <p class="title">Кешбэк 10% за улыбку</p>
            <img src="/images/popular-section/2.svg" alt="" />
          </div>

          <div class="grid-item size1">
            <p class="title">Кредит наличными</p>
            <img src="/images/popular-section/3.svg" alt="" />
          </div>

          <div class="grid-item size1">
            <p class="title">Курсы металлов</p>
            <img src="/images/popular-section/4.svg" alt="" />
          </div>
        </div>
        <div class="grid-row">
          <div class="grid-item size3">
            <p class="title">Ипотека под 8%</p>
            <p class="discript">Программа для семей с детьми</p>
            <img src="/images/popular-section/5.svg" alt="" />
          </div>

          <div class="grid-item size3">
            <p class="title">Новый СберПремьер</p>
            <p class="discript">Выгодные условия по вкладам и повышенный кешбэк</p>
            <img src="/images/popular-section/6.svg" alt="" />
          </div>

          <div class="grid-item size1">
            <p class="title">Как получать бонусы</p>
            <p class="discript">Все о программе лояльности</p>
            <img src="/images/popular-section/7.svg" alt="" />
          </div>
        </div>
      </div>

      <div class="install">
        <div class="install-info">
          <RouterLink to="/ios-android"> <h3>Установите СберБанк Онлайн на телефон</h3></RouterLink>
          <p>Загрузите приложение в офисе банка или скачайте его самостоятельно</p>
          <div class="install-buttons">
            <button @click="OpenAndroidInstalModal()">Установить на Android</button>
            <router-link to="/ios"> <button>Установить на iOS</button></router-link>
          </div>
        </div>
        <img src="/images/popular-section/8.svg" alt="" />
      </div>
    </div>
    <ModalLayout @close="CloseAndroidInstalModal()" :isOpen="isOpenAndroidInstalModal">
      <img class="qr-android" src="/images/popular-section/QRAndroid.png" alt="" />
    </ModalLayout>
  </section>
</template>

<style scoped>
.popular {
  margin-bottom: 140px;
}
.popular-title {
  color: #25a33b;
  font-size: 36px;
  font-weight: 500;
  text-align: center;
  margin: 34px auto;
}
.popular-content {
  background-color: #dce2de;
  border-radius: 10px;
  width: 100%;
  padding: 66px 38px;
  position: relative;
}
.grid {
  width: 100%;
  display: flex;
  gap: 36px;
  flex-direction: column;
}
.grid-row {
  width: 100%;
  display: flex;
  gap: 18px;
}
.grid-item {
  height: 185px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 18px 12px;
  position: relative;
  min-width: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.size1 {
  width: 185px;
}
.size2 {
  width: 285px;
}
.size3 {
  width: 337px;
}
.grid-item .title {
  font-size: 24px;
}
.grid-item .discript {
  font-size: 15px;
  font-weight: 300;
  margin-top: 10px;
  width: 70%;
}
.grid-item img {
  position: absolute;
  right: 0;
  bottom: 0;
  max-width: 120px;
  max-height: 80px;
}

.install {
  position: absolute;
  background: rgba(33, 160, 56, 0.8);
  border-radius: 20px;
  bottom: -140px;
  color: #ffffff;
  display: flex;
  height: 174px;
  width: 637px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 4px;
  -webkit-box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
}
.install img {
  position: absolute;
  right: -25px;
  bottom: 0px;
  max-width: 160px;
  width: 100%;
  height: auto;
}
.install-info {
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px 28px;
}
.install-info h3 {
  margin-top: 20px;
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;
  text-decoration: underline;
  transition: 0.3s;
}
.install-info h3:hover {
  scale: 1.05;
}
.install-info p {
  font-weight: 300;
  font-size: 12px;
}
.install-buttons {
  display: flex;
  gap: 32px;
}
.install-buttons button {
  border: 1px solid #ffffff;
  border-radius: 8px;
  padding: 8px 24px;
  text-wrap: nowrap;
  box-shadow: 0 4px;
  -webkit-box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
}
.qr-android {
  width: 100%;
  padding: 24px;
}

/* --- Адаптив --- */

/* Планшеты */
@media (max-width: 768px) {
  .popular {
    margin-bottom: 80px;
  }
  .popular-title {
    font-size: 28px;
    margin: 24px auto;
  }
  .popular-content {
    padding: 30px 12px 30px 12px;
  }
  .grid {
    gap: 24px;
  }
  .grid-row {
    flex-direction: column;
    gap: 16px;
  }
  .grid-item {
    width: 100% !important;
    min-width: 0;
    height: auto;
    min-height: 120px;
    padding: 16px 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .grid-item .title {
    font-size: 18px;
  }
  .grid-item .discript {
    font-size: 13px;
    width: 100%;
  }
  .grid-item img {
    position: static !important;
    max-width: 90px;
    max-height: 60px;
    margin-top: 10px;
    margin-bottom: 0;
    display: block;
    right: auto;
    bottom: auto;
  }
  .install {
    position: static;
    width: 100%;
    max-width: 100%;
    height: auto;
    margin: 32px auto 0 auto;
    left: auto;
    transform: none;
    box-shadow: none;
    flex-direction: column;
    align-items: center;
    padding: 18px 10px;
    border-radius: 14px;
  }
  .install img {
    display: none;
  }
  .install-info {
    width: 100%;
    padding: 0;
    gap: 12px;
    align-items: center;
    text-align: center;
  }
  .install-info h3 {
    font-size: 16px;
    margin-top: 10px;
  }
  .install-info p {
    font-size: 12px;
  }
  .install-buttons {
    justify-content: center;
    gap: 12px;
  }
  .install-buttons button {
    padding: 8px 16px;
    font-size: 13px;
  }
}

/* Мобильные устройства */
@media (max-width: 480px) {
  .popular {
    margin-bottom: 48px;
  }
  .popular-title {
    font-size: 20px;
    margin: 18px auto;
  }
  .popular-content {
    padding: 18px 4px 18px 4px;
  }
  .grid {
    gap: 14px;
  }
  .grid-row {
    gap: 10px;
  }
  .grid-item {
    padding: 10px 6px;
    min-height: 80px;
  }
  .grid-item .title {
    font-size: 15px;
  }
  .grid-item .discript {
    font-size: 11px;
  }
  .grid-item img {
    max-width: 60px;
    max-height: 40px;
    margin-top: 6px;
  }
  .install {
    padding: 10px 4px;
    margin-top: 18px;
    border-radius: 8px;
  }
  .install img {
    width: 70px;
    margin-top: 8px;
  }
  .install-info h3 {
    font-size: 13px;
    margin-top: 6px;
  }
  .install-info p {
    font-size: 10px;
  }
  .install-buttons button {
    padding: 6px 8px;
    font-size: 11px;
  }
}
</style>
