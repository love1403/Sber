<template>
  <div class="tabs-container">
    <div class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="['tab', { active: tab === activeTab }]"
        @click="activeTab = tab"
      >
        {{ tab }}
      </button>
    </div>

    <LoanCalculator v-if="activeTab === 'Кредит'" @submit="openModal" />

    <MortgageCalculator v-else-if="activeTab === 'Ипотека'" @submit="openModal" />

    <DepozitCalculator v-else-if="activeTab === 'Вклад'" @submit="openModal" />

    <div v-else class="tab-stub">
      <div class="stub-content">Калькулятор вклада скоро появится</div>
    </div>

    <!-- Модальное окно с формой -->
    <ModalLayout @close="closeModal" :isOpen="isModalOpen">
      <div class="application-form">
        <h3>Заполните данные для заявки</h3>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">ФИО</label>
            <input
              id="name"
              type="text"
              v-model="formData.name"
              required
              placeholder="Иванов Иван Иванович"
            />
          </div>

          <div class="form-group">
            <label for="phone">Телефон</label>
            <input
              id="phone"
              type="tel"
              v-model="formData.phone"
              required
              placeholder="+7 (999) 999-99-99"
            />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              v-model="formData.email"
              required
              placeholder="example@mail.ru"
            />
          </div>

          <button type="submit" class="submit-btn">Отправить заявку</button>
        </form>
      </div>
    </ModalLayout>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LoanCalculator from './LoanCalculator.vue'
import MortgageCalculator from './MortgageCalculator.vue'
import DepozitCalculator from './DepozitCalculator.vue'
import ModalLayout from '../layouts/ModalLayout.vue'

const tabs = ['Кредит', 'Ипотека', 'Вклад']
const activeTab = ref('Кредит')
const isModalOpen = ref(false)
const formData = ref({
  name: '',
  phone: '',
  email: '',
})

// Открываем модальное окно при событии из дочерних компонентов
const openModal = () => {
  isModalOpen.value = true
}

// Закрываем модальное окно
const closeModal = () => {
  isModalOpen.value = false
}

// Обработка отправки формы
const submitForm = () => {
  console.log('Данные формы:', formData.value)
  // Здесь будет логика отправки данных
  alert('Отправлено! Данные по вашей заявке находятся в вашем личном кабинете.')
  closeModal()
  // Сбрасываем форму
  formData.value = { name: '', phone: '', email: '' }
}
</script>

<style scoped>
.tabs-container {
  width: 850px;
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem 0 0 0;
  box-sizing: border-box;
}
.tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}
.tab {
  padding: 0.8rem 2.2rem;
  background: #fff;
  border: 1.5px solid #e0e0e0;
  border-radius: 1.2rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: #555;
  cursor: pointer;
  transition:
    background 0.15s,
    color 0.15s;
  outline: none;
  border: 1px solid #a4a4a4;
  white-space: nowrap;
}
.tab.active {
  background: #f9f9f9;
  color: #222;
  font-weight: 600;
}
.tab-stub {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 350px;
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
}
.stub-content {
  color: #888;
  font-size: 1.2rem;
  text-align: center;
}

.application-form {
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
}
.application-form h3 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.4rem;
  color: #222;
}
.form-group {
  margin-bottom: 15px;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  color: #444;
}
.form-group input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}
.submit-btn {
  width: 100%;
  padding: 12px;
  background: #219a43;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.2s;
}
.submit-btn:hover {
  background: #21a038;
}

/* Планшеты */
@media (max-width: 768px) {
  .application-form {
    padding: 15px;
  }
  .application-form h3 {
    font-size: 1.2rem;
  }
}

/* Мобильные устройства */
@media (max-width: 480px) {
  .application-form {
    padding: 10px;
  }
  .application-form h3 {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }
  .form-group input {
    padding: 8px 10px;
    font-size: 0.95rem;
  }
  .submit-btn {
    font-size: 1rem;
    padding: 10px;
  }
}

/* Планшеты */
@media (max-width: 768px) {
  .tabs-container {
    width: 100%;
    padding: 1.2rem 0 0 0;
  }
  .tabs {
    gap: 0.3rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  .tab {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
  }
  .tab-stub {
    min-height: 220px;
    font-size: 1rem;
  }
}

/* Мобильные устройства */
@media (max-width: 480px) {
  .tabs-container {
    padding: 0.5rem 0 0 0;
  }
  .tabs {
    flex-direction: column;
    align-items: stretch;
    gap: 0.4rem;
  }
  .tab {
    width: 100%;
    font-size: 0.98rem;
    padding: 0.7rem 0.5rem;
    text-align: center;
  }
  .tab-stub {
    min-height: 120px;
    font-size: 0.95rem;
    border-radius: 0.7rem;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  }
  .stub-content {
    font-size: 1rem;
  }
}
</style>
