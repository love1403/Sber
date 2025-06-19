<script setup>
import { handleError, ref } from 'vue'
import ModalLayout from '../layouts/ModalLayout.vue'

const inputsData = ref({
  fio: '',
  tel: '',
  email: '',
  adres: '',
  type: '',
})

const isOpenDeliveryModal = ref(false)

const handleDelivery = () => {
  if (
    !inputsData.value.fio ||
    !inputsData.value.tel ||
    !inputsData.value.email ||
    !inputsData.value.adres ||
    !inputsData.value.type
  )
    return

  inputsData.value.fio = ''
  inputsData.value.tel = ''
  inputsData.value.email = ''
  inputsData.value.adres = ''
  inputsData.value.type = ''

  OpenDeliveryModal()
}
const OpenDeliveryModal = () => {
  isOpenDeliveryModal.value = true
}
const CloseDeliveryModal = () => {
  isOpenDeliveryModal.value = false
}
</script>

<template>
  <section class="delivery">
    <h2 class="delivery-title">Доставка карт до двери</h2>
    <form @submit.prevent="handleDelivery()">
      <!-- Desktop labels -->
      <div class="form-block">
        <div class="form-labeles">
          <label for="fio-input">ФИО</label>
          <label for="tel-input">Номер телефона</label>
          <label for="email-input">Почта</label>
          <label for="adres-input">Адрес</label>
          <label for="type-input">Тип</label>
        </div>
        <div class="form-inputs">
          <div class="input-group">
            <label for="fio-input" class="mobile-label">ФИО</label>
            <input v-model="inputsData.fio" id="fio-input" type="text" />
          </div>
          <div class="input-group">
            <label for="tel-input" class="mobile-label">Номер телефона</label>
            <input v-model="inputsData.tel" id="tel-input" type="tel" />
          </div>
          <div class="input-group">
            <label for="email-input" class="mobile-label">Почта</label>
            <input v-model="inputsData.email" id="email-input" type="email" />
          </div>
          <div class="input-group">
            <label for="adres-input" class="mobile-label">Адрес</label>
            <input v-model="inputsData.adres" id="adres-input" type="text" />
          </div>
          <div class="input-group">
            <label for="type-input" class="mobile-label">Тип</label>
            <select v-model="inputsData.type" id="type-input">
              <option value=""></option>
              <option value="Дебетовая карта">Дебетовая карта</option>
              <option value="Кредитная карта">Кредитная карта</option>
              <option value="Платёжный стикер">Платёжный стикер</option>
              <option value="SberBoom">SberBoom</option>
            </select>
          </div>
        </div>
      </div>
      <div class="button-delivery">
        <button>Отправить</button>
      </div>
    </form>
    <ModalLayout @close="CloseDeliveryModal()" :isOpen="isOpenDeliveryModal">
      <p class="modal-text">
        Ваша заявка на доставку успешно принята.<br />Мы в скором времени с вами свяжемся!
      </p>
    </ModalLayout>
  </section>
</template>

<style scoped>
.delivery {
  padding-top: 4px;
}
.delivery-title {
  color: #25a33b;
  font-size: 36px;
  font-weight: 500;
  text-align: center;
  margin: 34px auto;
}
form {
  background: linear-gradient(120deg, rgba(12, 168, 56, 0.33) 0%, rgba(244, 238, 53, 0.33) 100%);
  border-radius: 40px;
  width: 850px;
  padding: 16px 24px;
  margin: 0 auto;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
}
.form-block {
  display: flex;
}
.form-labeles {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #ffff;
  padding-right: 12px;
}
.form-labeles label {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-wrap: nowrap;
  font-size: 20px;
  font-weight: 300;
}
.form-inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 42px;
  width: 100%;
}
.input-group {
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: relative;
}
.input-group .mobile-label {
  display: none;
  margin-bottom: 6px;
  font-size: 16px;
  color: #222;
  font-weight: 400;
}
.input-group input,
.input-group select {
  background: #ffff;
  padding: 8px 16px;
  width: 80%;
  border-radius: 8px;
  border: 1px solid #ddd;
}
button {
  background-color: #21a038;
  padding: 12px 12px;
  border-radius: 15px;
  color: white;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  text-wrap: nowrap;
  font-size: 24px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}
button:hover {
  background-color: #1d8d31;
}
.button-delivery {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
}
.modal-text {
  margin: 0 auto;
  width: fit-content;
  text-align: center;
  font-size: 20px;
  padding: 20px;
}

/* Планшеты и мобильные: лейблы над инпутами */
@media (max-width: 768px) {
  form {
    width: 95%;
    max-width: 500px;
    padding: 12px 24px;
    border-radius: 24px;
  }
  .delivery-title {
    font-size: 28px;
  }
  .form-block {
    flex-direction: column;
  }
  .form-labeles {
    display: none;
  }
  .form-inputs {
    padding-left: 0;
    width: 100%;
  }
  .input-group {
    height: auto;
    margin-bottom: 18px;
    align-items: flex-start;
  }
  .input-group .mobile-label {
    display: block;
    font-size: 15px;
    margin-bottom: 4px;
    font-weight: 400;
  }
  .input-group input,
  .input-group select {
    width: 100%;
    max-width: 100%;
    padding: 10px 14px;
    font-size: 15px;
  }
  button {
    font-size: 20px;
    padding: 10px 20px;
  }
}

/* Мобильные устройства */
@media (max-width: 480px) {
  .delivery-title {
    font-size: 22px;
    margin: 18px auto;
  }
  form {
    width: 100%;
    padding: 8px 12px;
    border-radius: 16px;
  }
  .input-group .mobile-label {
    font-size: 13px;
    margin-bottom: 3px;
  }
  .input-group input,
  .input-group select {
    font-size: 13px;
    padding: 8px 8px;
  }
  button {
    font-size: 16px;
    padding: 8px 14px;
  }
  .modal-text {
    font-size: 14px;
    padding: 10px;
  }
}
</style>
