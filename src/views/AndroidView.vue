<template>
  <PageLayout>
    <HeroLayout
      title="СберБанк Онлайн для Android"
      description="Скачайте приложение в любом подходящем магазине приложений или на сайте Сбера"
      imgUrl="/images/hero/hero2.png"
      firstButtonText="СберБанк Онлайн для <br> iOS"
      secondButtonText="Веб версия СберБанк <br> Онлайн"
      secondButtonUrl="/web"
      firstButtonUrl="/ios"
    >
      <div class="QR">
        <img src="/images/android/QR.png" alt="" />
        <p>Отсканируйте QR-код камерой вашего устройства</p>
      </div>
    </HeroLayout>
    <section class="stores">
      <div class="stores-item" v-for="store in stores" :key="store.name">
        <img :src="store.imgUrl" alt="" />
        <p class="stores-item-name">{{ store.name }}</p>
        <p class="stores-item-description">{{ store.description }}</p>
        <a :href="store.buttonUrl"> <button>Скачать</button></a>
      </div>
    </section>

    <section>
      <div class="android-block first">
        <img src="/images/android/android1.png" alt="" />
        <div class="android-block-info">
          <h3>Скачивать приложение на сайте Сбера — безопасно</h3>
          <p>
            Установочный файл на сайте подходит для всех телефонов и так же безопасен, как
            и в магазине приложений. Просто подтвердите скачивание, когда появится стандартное
            уведомление от Android
          </p>
          <a href="https://www.sberbank.com/sms/apk/"><button>Cкачать файл</button></a>
        </div>
      </div>

      <div class="android-block second">
        <img src="/images/android/android2.png" alt="" />
        <div class="android-block-info">
          <h3>Поможем установить приложение на Android</h3>
          <p>
            Если разобраться самостоятельно не получается, приходите в любой офис Сбера или оставьте
            заявку на встречу с выездным менеджером — сотрудник приедет к вам и поможет установить
            актуальную версию СберБанк Онлайн на телефон
          </p>
          <RouterLink to="/ios-android">
            <button>Выбрать офис</button>
          </RouterLink>
        </div>
      </div>
    </section>
  </PageLayout>
</template>

<script setup>
import PageLayout from '@/components/layouts/PageLayout.vue'
import HeroLayout from '@/components/layouts/HeroLayout.vue'
import { RouterLink } from 'vue-router'
const stores = [
  {
    name: 'RuStore',
    description: 'Для любых телефонов',
    imgUrl: '/images/stores/rustore.svg',
    buttonUrl: 'https://www.rustore.ru/catalog/app/ru.sberbankmobile?rsm=1&mt_link_id=l394r2',
  },
  {
    name: 'AppGallery',
    description: 'Для телефонов Huawei',
    imgUrl: '/images/stores/appgallery.svg',
    buttonUrl: 'https://appgallery.huawei.com/app/C100994843?sharePrepath=ag',
  },
  {
    name: 'Galaxy Store',
    description: 'Для телефонов Samsung',
    imgUrl: '/images/stores/galaxy-store.png',
    buttonUrl:
      'https://galaxystore.samsung.com/detail/ru.sberbankmobile?session_id=W_0ed0d6d38f31be4838e76c972f4d1e85',
  },
]
</script>

<style scoped>
.QR {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 320px;
  color: #fff;
  animation: fadeInLeft 0.7s;
}
.QR img {
  width: 90px;
  height: 90px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  animation: fadeIn 1s;
}

.stores {
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  gap: 24px;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s;
}
.stores-item {
  border: 1px solid #9f9f9f;
  border-radius: 22px;
  padding: 18px 28px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 270px;
  min-width: 180px;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  animation: fadeIn 1s;
}
.stores-item:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.1);
}
.stores-item img {
  width: 70px;
  height: 70px;
  object-fit: contain;
  margin-bottom: 8px;
}
.stores-item-name {
  margin-top: 16px;
  font-weight: 600;
  width: 100%;
  margin-bottom: 4px;
  font-size: 18px;
}
.stores-item-description {
  width: 100%;
  font-size: 14px;
  color: #444;
}
.stores-item button {
  background-color: #319443;
  border-radius: 8px;
  padding: 8px 22px;
  margin-top: 16px;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  border: none;
  transition:
    background 0.2s,
    transform 0.18s;
  box-shadow: 0 4px 12px rgba(49, 148, 67, 0.09);
  animation: fadeInUp 1.2s;
}
.stores-item button:hover {
  background: #21a038;
  transform: scale(1.06);
}

.android-block {
  display: flex;
  background-color: #f2f3f8;
  border-radius: 16px;
  padding: 40px;
  gap: 24px;
  position: relative;
  justify-content: end;
  margin-top: 64px;
  overflow: hidden;
  animation: fadeInUp 0.9s;
}
.android-block-info {
  width: 50%;
  display: flex;
  gap: 32px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 1;
}
.android-block-info h3 {
  font-size: 24px;
  font-weight: 800;
  color: #2e2e2e;
  animation: fadeIn 1s;
}
.android-block-info p {
  font-weight: 700;
  color: #2e2e2e;
  font-size: 15px;
  animation: fadeIn 1.2s;
}
.first img,
.second img {
  position: absolute;
  bottom: 0;
  left: 0;

  max-width: 45vw;
  animation: fadeInLeft 1.2s;
}
.second {
  background-color: #ecf3fd;
  justify-content: start;
}
.second img {
  right: 0;
  left: auto;
  animation: fadeInRight 1.2s;
}
.android-block-info button {
  background-color: #319443;
  padding: 12px 26px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  border: none;
  transition:
    background 0.2s,
    transform 0.16s;
  box-shadow: 0 4px 12px rgba(49, 148, 67, 0.09);
  animation: fadeInUp 1.3s;
}
.android-block-info button:hover {
  background: #21a038;
  transform: scale(1.05);
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

/* Планшеты */
@media (max-width: 768px) {
  .QR {
    flex-direction: column;
    gap: 10px;
    width: 100%;
    align-items: flex-start;
    font-size: 15px;
  }
  .QR img {
    width: 70px;
    height: 70px;
  }
  .stores {
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    padding-top: 36px;
  }
  .stores-item {
    width: 180px;
    min-width: 120px;
    padding: 12px 10px;
    margin-bottom: 10px;
  }
  .android-block {
    flex-direction: column;
    align-items: center;
    padding: 24px 10px;
    gap: 14px;
    margin-top: 36px;
  }
  .android-block-info {
    width: 100%;
    gap: 18px;
    padding-bottom: 18px;
  }
  .android-block-info h3 {
    font-size: 17px;
  }
  .android-block-info p {
    font-size: 13px;
  }
  .first img,
  .second img {
    position: static;
    width: 60vw;
    max-width: 260px;
    margin: 0 auto 10px auto;
    display: block;
    left: auto;
    right: auto;
    bottom: auto;
  }
}

/* Мобильные устройства */
@media (max-width: 480px) {
  .QR {
    font-size: 13px;
    gap: 8px;
  }
  .QR img {
    width: 54px;
    height: 54px;
  }
  .stores {
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding-top: 18px;
  }
  .stores-item {
    width: 98vw;
    min-width: 0;
    padding: 10px 4vw;
    margin: 0 auto 8px auto;
  }
  .stores-item-name {
    font-size: 15px;
  }
  .stores-item-description {
    font-size: 12px;
  }
  .android-block {
    flex-direction: column;
    align-items: center;
    padding: 12px 2vw 16px 2vw;
    gap: 8px;
    margin-top: 18px;
  }
  .android-block-info {
    width: 100%;
    gap: 8px;
    padding-bottom: 10px;
  }
  .android-block-info h3 {
    font-size: 14px;
  }
  .android-block-info p {
    font-size: 11px;
  }
  .android-block-info button {
    font-size: 13px;
    padding: 8px 12px;
  }
  .first img,
  .second img {
    width: 90vw;
    max-width: 320px;
    margin: 0 auto 8px auto;
  }
}
</style>
