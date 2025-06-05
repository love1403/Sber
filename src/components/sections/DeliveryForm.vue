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
      <div class="form-block">
        <div class="form-labeles">
          <label for="fio-input">ФИО</label>
          <label for="tel-input">Номер телефона</label>
          <label for="email-input">Почта</label>
          <label for="adres-input">Адрес</label>
          <label for="type-input">Тип</label>
        </div>
        <div class="form-inputs">
          <div class="input-item">
            <input v-model="inputsData.fio" id="fio-input" type="text" />
          </div>
          <div class="input-item"><input v-model="inputsData.tel" id="tel-input" type="tel" /></div>

          <div class="input-item">
            <input v-model="inputsData.email" id="email-input" type="email" />
          </div>

          <div class="input-item">
            <input v-model="inputsData.adres" id="adres-input" type="text" />
          </div>

          <div class="input-item">
            <select v-model="inputsData.type" name="" id="type-input">
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
  background: rgb(12, 168, 56);
  background: linear-gradient(120deg, rgba(12, 168, 56, 0.33) 0%, rgba(244, 238, 53, 0.33) 100%);
  border-radius: 40px;
  width: 850px;
  padding: 16px 24px;
  margin: 0 auto;
  box-shadow: 0 4px;
  -webkit-box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
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
.form-inputs .input-item {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
}
.input-item input,
select {
  background: #ffff;
  padding: 8px 16px;
  width: 80%;
}
button {
  background-color: #21a038;
  padding: 12px 12px;
  border-radius: 15px;
  color: white;
  box-shadow: 0 4px;
  -webkit-box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  text-wrap: nowrap;
  font-size: 24px;
  font-weight: 500;
}
.button-delivery {
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-text {
  margin: 0 auto;
  width: fit-content;
  text-align: center;
}
</style>
