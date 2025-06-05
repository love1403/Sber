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
}
.stores {
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
}
.stores-item {
  border: 1px solid #9f9f9f;
  border-radius: 22px;
  padding: 12px 28px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 270px;
}
.stores-item-name {
  margin-top: 20px;
  font-weight: 600;
  width: 100%;
  margin-bottom: 4px;
}
.stores-item-description {
  width: 100%;
}
.stores-item button {
  background-color: #319443;
  border-radius: 8px;
  padding: 6px 16px;
  margin-top: 12px;
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
}
.android-block-info {
  width: 50%;
  display: flex;
  gap: 32px;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.android-block-info h3 {
  font-size: 24px;
  font-weight: 800;
  color: #2e2e2e;
}
.android-block-info p {
  font-weight: 700;
  color: #2e2e2e;
}
.first img {
  position: absolute;
  bottom: 0;
  left: 0;
}
.android-block-info button {
  background-color: #319443;
  padding: 12px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 400;
}
.second {
  background-color: #ecf3fd;
  justify-content: start;
}
.second img {
  right: 0;
  position: absolute;
  bottom: 0;
}
</style>
