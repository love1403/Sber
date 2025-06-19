<script setup>
import { ref } from 'vue'
import SourchBar from './SourchBar.vue'
import ModalLayout from './ModalLayout.vue'

const isOpenModal = ref(false)
const openModal = () => {
  isOpenModal.value = true
}
const closeModal = () => {
  isOpenModal.value = false
}
</script>

<template>
  <footer>
    <div class="footer-content">
      <!-- Социальные сети -->
      <div class="footer-social">
        <div class="social-list">
          <a href="https://t.me/sberbank" aria-label="Telegram"
            ><img src="/images/footer/tg.svg" alt="Telegram"
          /></a>
          <a
            href="https://www.instagram.com/sberbank?igsh=MThzdG5wdmtobTNhbg=="
            aria-label="Instagram"
          >
            <img src="/images/footer/inst.svg" alt="Instagram" />
          </a>
          <a href="https://vk.com/sberbank" aria-label="VKontakte"
            ><img src="/images/footer/vk.svg" alt="VKontakte"
          /></a>
          <button @click="openModal()" aria-label="Поиск">
            <img src="/images/footer/poisk.svg" alt="Поиск" />
          </button>
          <button aria-label="Версия для слабовидящих">
            <img src="/images/footer/eye.svg" alt="Версия для слабовидящих" />
          </button>
        </div>
        <p class="email">sberbank@sberbank.ru</p>
      </div>

      <!-- Лого и адрес -->
      <div class="footer-logo">
        <img src="/images/footer/logosber.svg" alt="СберБанк" class="logo" />
        <p class="adress-title">
          Россия, Москва, 117997, ул. Вавилова, 19 <br />
          © 1997—2025 ПАО Сбербанк.
        </p>
      </div>

      <!-- Контактная информация -->
      <div class="footer-info">
        <div class="info-content">
          <div class="contact-block">
            <h4>900</h4>
            <p>
              Бесплатно по России при звонке в сети операторов<br />
              МТС, Билайн, МегаФон, t2, Yota, Мотив
            </p>
          </div>

          <div class="contact-block">
            <h4>Звонок из-за границы</h4>
            <p>
              Стоимость звонка зависит от тарифа<br />
              вашего мобильного оператора
            </p>
          </div>
        </div>
      </div>
    </div>
    <ModalLayout @close="closeModal()" :isOpen="isOpenModal">
      <SourchBar @close="closeModal()" />
    </ModalLayout>
  </footer>
</template>

<style scoped>
footer {
  background: linear-gradient(180deg, rgba(12, 168, 56, 0.33) 0%, rgba(244, 238, 53, 0.33) 100%);
  padding: 0;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 24px;
  gap: 24px;
}

/* Социальные сети */
.footer-social {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 190px;
  max-width: 320px;
  flex: 1 1 0;
  gap: 8px;
}

.social-list {
  display: flex;
  gap: 14px;
}

.social-list img {
  width: 48px;
  height: 48px;
}

.email {
  font-size: 14px;
  color: #222;
  margin: 0 auto;
  margin-top: 8px;
}

/* Лого и адрес */
.footer-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 0;
  min-width: 180px;
  max-width: 280px;
  gap: 12px;
}

.footer-logo img {
  width: 110px;
}

.adress-title {
  color: rgba(0, 0, 0, 0.67);
  text-align: center;
  font-size: 13px;
  line-height: 1.4;
}

/* Контакты */
.footer-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 210px;
  max-width: 270px;
  flex: 1 1 0;
}

.info-content {
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  align-items: flex-start;
}

.contact-block {
  /* background убран */
  border-radius: 0;
  padding: 0;
  text-align: start;
}

.contact-block h4 {
  font-size: 17px;
  margin-bottom: 4px;
  color: #000;
  font-weight: 700;
}

.contact-block p {
  font-size: 13px;
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.4;
  margin: 0;
}

/* Планшетная версия */
@media (max-width: 900px) {
  .footer-content {
    flex-direction: column;
    align-items: stretch;
    gap: 32px;
    padding: 32px 16px;
  }
  .footer-social,
  .footer-logo,
  .footer-info {
    align-items: center;
    min-width: 0;
    max-width: none;
    width: 100%;
  }
  .footer-info .info-content {
    align-items: center;
  }
  .contact-block {
    text-align: center;
  }
}

/* Мобильная версия */
@media (max-width: 600px) {
  .footer-content {
    padding: 20px 8px;
    gap: 18px;
  }
  .footer-social,
  .footer-logo,
  .footer-info {
    min-width: 0;
    max-width: none;
    width: 100%;
    align-items: center;
  }
  .footer-logo img {
    width: 90px;
  }
  .adress-title {
    font-size: 12px;
  }
  .social-list img {
    width: 28px;
    height: 28px;
  }
  .contact-block h4 {
    font-size: 15px;
  }
  .contact-block p {
    font-size: 12px;
  }
  .email {
    font-size: 13px;
  }
}
</style>
