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
    <div v-if="activeTab === 'Кредит'">
      <!-- Калькулятор кредита -->
      <div class="loan-calculator">
        <div class="calculator-form">
          <h2>Поможем рассчитать</h2>
          <div class="form-group">
            <label for="amount">Сколько вам нужно</label>
            <input
              id="amount"
              v-model.number="amount"
              type="number"
              class="amount-input"
              min="10000"
              max="30000000"
              placeholder="Введите сумму"
            />
            <div class="input-hints">
              <span v-for="hint in amountHints" :key="hint">{{ hint }}</span>
            </div>
          </div>
          <div class="form-group">
            <label for="term">На срок</label>
            <input
              id="term"
              v-model.number="term"
              type="number"
              class="term-input"
              min="3"
              max="60"
              placeholder="Введите срок в месяцах"
            />
            <div class="input-hints">
              <span v-for="hint in termHints" :key="hint">{{ hint }}</span>
            </div>
          </div>
          <div class="disclaimer">
            Предварительный расчёт. Не является публичной офертой<br />
            Ставка рассчитывается индивидуально
          </div>
        </div>
        <div class="payment-info">
          <div class="payment-card">
            <div class="payment-label">Ежемесячный платёж</div>
            <div class="payment-amount">
              {{ formatCurrency(monthlyPayment) }}
            </div>
            <button class="submit-btn" @click="submitApplication">Подать заявку</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="activeTab === 'Ипотека'" class="tab-stub">
      <div class="stub-content">Калькулятор ипотеки скоро появится</div>
    </div>
    <div v-else-if="activeTab === 'Вклад'" class="tab-stub">
      <div class="stub-content">Калькулятор вклада скоро появится</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const tabs = ['Кредит', 'Ипотека', 'Вклад']
const activeTab = ref('Кредит')

const amount = ref(150000)
const term = ref(24)
const interestRate = ref(12)

const amountHints = ['10 000 ₽', '150 000 ₽', '2 млн ₽', '30 млн ₽']
const termHints = ['3 мес', '2 года', '3 года 6 мес', '5 лет']

const monthlyPayment = computed(() => {
  if (!amount.value || !term.value) return 0
  const principal = amount.value
  const months = term.value
  const monthlyRate = interestRate.value / 100 / 12
  if (monthlyRate === 0) return Math.round(principal / months)
  const payment =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1)
  return Math.round(payment)
})

const formatCurrency = (num) =>
  new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
  }).format(num)

const submitApplication = () => {
  alert('Заявка отправлена!')
}
</script>

<style scoped>
.tabs-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 0 0 0;
}
.tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}
.tab {
  padding: 0.8rem 2.2rem;
  background: #fff;
  border: 1.5px solid #e0e0e0;
  border-bottom: none;
  border-radius: 1.2rem 1.2rem 0 0;
  font-size: 1.1rem;
  font-weight: 500;
  color: #555;
  cursor: pointer;
  transition:
    background 0.15s,
    color 0.15s;
  outline: none;
}
.tab.active {
  background: #f9f9f9;
  color: #222;
  border-bottom: 2px solid #fff;
  font-weight: 600;
}
.loan-calculator {
  display: flex;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 4px;
  -webkit-box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
}
.calculator-form {
  flex: 1;
  padding: 1.5rem 1.5rem 0 1.5rem;
}
.calculator-form h2 {
  margin: 0 0 1.5rem 0;
  font-size: 1.4rem;
  font-weight: 600;
  color: #222;
}
.form-group {
  margin-bottom: 1.5rem;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #444;
}
.amount-input,
.term-input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #bbb;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  margin-bottom: 0.4rem;
  background: #fafafa;
}
.input-hints {
  display: flex;
  gap: 1.2rem;
  color: #888;
  font-size: 0.98rem;
  margin-bottom: 0.2rem;
  margin-left: 0.1rem;
}
.disclaimer {
  font-size: 0.83rem;
  color: #999;
  margin-top: 2rem;
}
.payment-info {
  flex: 0 0 260px;
  display: flex;
  align-items: center;
}
.payment-card {
  background: #fff;
  padding: 1.6rem 1.2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  text-align: center;
  border: 1px solid #e5e5e5;
}
.payment-label {
  color: #666;
  font-size: 1.05rem;
  margin-bottom: 0.7rem;
}
.payment-amount {
  font-size: 2.3rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
}
.submit-btn {
  width: 100%;
  padding: 1rem;
  background: #219a43;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.08rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.submit-btn:hover {
  background: #21a038;
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
@media (max-width: 768px) {
  .loan-calculator {
    flex-direction: column;
    padding: 1rem;
  }
  .payment-info {
    flex: none;
    margin-top: 1.5rem;
  }
}
</style>
