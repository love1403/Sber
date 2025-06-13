<template>
  <div class="loan-calculator">
    <div class="calculator-form">
      <div class="form-group">
        <label for="depositAmount">Сумма при открытии вклада</label>
        <div class="input-with-range">
          <input
            id="depositAmount"
            type="number"
            v-model.number="depositAmount"
            :min="minDeposit"
            :max="maxDeposit"
            class="amount-input manual-input"
            placeholder="Введите сумму"
            @input="onDepositInput"
          />
          <input
            type="range"
            v-model.number="depositAmount"
            :min="minDeposit"
            :max="maxDeposit"
            :step="stepDeposit"
            class="range-input"
          />
        </div>
        <div class="input-hints">
          <span>от {{ formatCurrency(minDeposit) }}</span>
        </div>
      </div>

      <div class="form-group">
        <label for="depositTerm">Срок вклада</label>
        <select id="depositTerm" v-model.number="depositTerm" class="amount-input">
          <option v-for="option in termOptions" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label>Выплачивать проценты</label>
        <div class="radio-group">
          <label class="radio-label">
            <input type="radio" value="end" v-model="payoutType" />
            В конце срока
          </label>
          <label class="radio-label">
            <input type="radio" value="monthly" v-model="payoutType" />
            Каждый месяц
          </label>
        </div>
      </div>

      <div class="disclaimer">Не является публичной офертой.</div>
    </div>

    <div class="payment-info">
      <div class="payment-card">
        <div class="info-date">Накопите к {{ endDate }}</div>
        <div class="payment-amount">{{ formatCurrency(totalAmount) }}</div>
        <div class="info-row">
          <span>Ваша ставка</span>
          <span style="color: #2db84c"
            ><b>{{ rate }} %</b></span
          >
        </div>
        <div class="info-row">
          <span>Ваш доход будет</span>
          <span>{{ formatCurrency(income) }}</span>
        </div>
        <button class="submit-btn" @click="openDeposit">Открыть вклад</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const minDeposit = 100000
const maxDeposit = 30000000
const stepDeposit = 10000

const depositAmount = ref(500000)
const depositTerm = ref(5)
const payoutType = ref('end')
const activeTab = ref('online')

const termOptions = [
  { value: 3, label: '3 месяца' },
  { value: 5, label: '5 месяцев' },
  { value: 6, label: '6 месяцев' },
  { value: 12, label: '12 месяцев' },
  { value: 24, label: '24 месяца' },
]

// Пример: ставка зависит от срока и типа выплаты
const rate = computed(() => {
  if (payoutType.value === 'end') {
    if (depositTerm.value === 5) return 20
    if (depositTerm.value === 3) return 18
    if (depositTerm.value === 6) return 17
    if (depositTerm.value === 12) return 15
    if (depositTerm.value === 24) return 13
  } else {
    if (depositTerm.value === 5) return 19
    if (depositTerm.value === 3) return 17
    if (depositTerm.value === 6) return 16
    if (depositTerm.value === 12) return 14
    if (depositTerm.value === 24) return 12
  }
  return 10
})

// Дата окончания вклада
const endDate = computed(() => {
  const now = new Date()
  now.setMonth(now.getMonth() + depositTerm.value)
  return now.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
})

// Итоговая сумма и доход
const totalAmount = computed(() => {
  // В конце срока: капитализация, иначе — простые проценты
  const principal = depositAmount.value
  const months = depositTerm.value
  const r = rate.value / 100
  if (payoutType.value === 'end') {
    // Капитализация процентов (ежемесячно)
    return Math.round(principal * Math.pow(1 + r / 12, months))
  } else {
    // Проценты выплачиваются ежемесячно, капитализация нет
    return Math.round(principal + ((principal * r) / 12) * months)
  }
})
const income = computed(() => totalAmount.value - depositAmount.value)

const formatCurrency = (num) =>
  new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
  }).format(num)

const openDeposit = () => {
  alert('Заявка на вклад отправлена!')
}

// Ограничение на ручной ввод
function onDepositInput() {
  if (depositAmount.value < minDeposit) depositAmount.value = minDeposit
  if (depositAmount.value > maxDeposit) depositAmount.value = maxDeposit
}
</script>

<style scoped>
.loan-calculator {
  display: flex;
  gap: 2rem;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background: #fff;
  border-radius: 1.2rem;
  border: 1px solid #a4a4a4;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);
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
.tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}
.tab {
  padding: 0.7rem 2.2rem;
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
}
.tab.active {
  background: #f9f9f9;
  color: #222;
  font-weight: 600;
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
.input-with-range {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.amount-input,
.term-input,
select {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #bbb;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  margin-bottom: 0.4rem;
  background: #fafafa;
  box-sizing: border-box;
}
.manual-input {
  width: 120px;
}
.range-input {
  flex: 1;
  -webkit-appearance: none;
  height: 8px;
  border-radius: 5px;
  background: #ddd;
  cursor: pointer;
  transition: background 0.3s;
}
.range-input:hover {
  background: #ccc;
}
.range-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: #219a43;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  margin-top: -6px;
  transition: background 0.3s;
}
.range-input::-webkit-slider-thumb:hover {
  background: #21a038;
}
.range-input::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: #219a43;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  transition: background 0.3s;
}
.range-input::-moz-range-thumb:hover {
  background: #21a038;
}
.input-hints {
  display: flex;
  gap: 1.2rem;
  color: #888;
  font-size: 0.98rem;
  margin-bottom: 0.2rem;
  margin-left: 0.1rem;
}
.radio-group {
  display: flex;
  gap: 2rem;
  margin-top: 0.5rem;
}
.radio-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.05rem;
  color: #444;
}
.disclaimer {
  font-size: 0.83rem;
  color: #999;
  margin-top: 2rem;
}
.payment-info {
  flex: 0 0 320px;
  display: flex;
  align-items: flex-start;
}
.payment-card {
  background: #fff;
  padding: 1.6rem 1.2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  text-align: center;
  border: 1px solid #e5e5e5;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.info-date {
  color: #888;
  font-size: 1.04rem;
  margin-bottom: 0.5rem;
}
.payment-amount {
  font-size: 2.3rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 1.2rem;
  letter-spacing: 1px;
}
.info-row {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1.08rem;
  margin-bottom: 0.5rem;
  color: #444;
  max-width: 260px;
  margin-left: auto;
  margin-right: auto;
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
  margin-top: 1.1rem;
  margin-bottom: 0.7rem;
}
.submit-btn:hover {
  background: #21a038;
}
.more-btn {
  width: 100%;
  padding: 1rem;
  background: #f4f4f4;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  font-size: 1.08rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}
.more-btn:hover {
  background: #ededed;
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
