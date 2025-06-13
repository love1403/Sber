<template>
  <div class="loan-calculator">
    <div class="calculator-form">
      <h2>Рассчитать ипотеку онлайн</h2>

      <!-- Тип программы -->
      <div class="form-group">
        <label for="programType">Тип программы</label>
        <select id="programType" v-model="programType" class="amount-input">
          <option value="secondary">Вторичка</option>
          <option value="primary">Новостройка</option>
        </select>
      </div>

      <!-- Стоимость недвижимости -->
      <div class="form-group">
        <label for="propertyPrice">Стоимость недвижимости</label>
        <div class="input-with-range">
          <input
            id="propertyPriceInput"
            type="number"
            v-model.number="propertyPrice"
            :min="minPropertyPrice"
            :max="maxPropertyPrice"
            class="amount-input manual-input"
            @input="onPropertyPriceInput"
          />
          <input
            id="propertyPriceRange"
            type="range"
            v-model.number="propertyPrice"
            :min="minPropertyPrice"
            :max="maxPropertyPrice"
            :step="stepAmount"
            class="amount-input range-input"
          />
        </div>
        <div class="input-hints">
          <span>{{ formatCurrency(minPropertyPrice) }}</span>
          <span>{{ formatCurrency(propertyPrice) }}</span>
          <span>{{ formatCurrency(maxPropertyPrice) }}</span>
        </div>
      </div>

      <!-- Первоначальный взнос -->
      <div class="form-group">
        <label for="downPayment">Первоначальный взнос</label>
        <div class="input-with-range">
          <input
            id="downPaymentInput"
            type="number"
            v-model.number="downPayment"
            :min="minDownPayment"
            :max="maxDownPayment"
            class="amount-input manual-input"
            @input="onDownPaymentInput"
          />
          <input
            id="downPaymentRange"
            type="range"
            v-model.number="downPayment"
            :min="minDownPayment"
            :max="maxDownPayment"
            :step="stepAmount"
            class="amount-input range-input"
          />
        </div>
        <div class="input-hints">
          <span>{{ formatCurrency(minDownPayment) }}</span>
          <span>{{ formatCurrency(downPayment) }}</span>
          <span>{{ formatCurrency(maxDownPayment) }}</span>
        </div>
      </div>

      <!-- Срок кредитования -->
      <div class="form-group">
        <label for="term">Срок кредитования (в месяцах)</label>
        <div class="input-with-range">
          <input
            id="termInput"
            type="number"
            v-model.number="term"
            :min="minTerm"
            :max="maxTerm"
            class="term-input manual-input"
            @input="onTermInput"
          />
          <input
            id="termRange"
            type="range"
            v-model.number="term"
            :min="minTerm"
            :max="maxTerm"
            :step="stepTerm"
            class="term-input range-input"
          />
        </div>
        <div class="input-hints">
          <span>{{ minTerm }} мес</span>
          <span>{{ term }} мес</span>
          <span>{{ maxTerm }} мес</span>
        </div>
      </div>

      <div class="disclaimer">Не является публичной офертой</div>
    </div>

    <div class="payment-info">
      <div class="payment-card">
        <h3 class="offer-title">Наше предложение</h3>
        <div class="offer-row">
          <span>Ежемесячный платёж</span>
          <span class="payment-amount">{{ formatCurrency(monthlyPayment) }}</span>
        </div>
        <div class="offer-row">
          <span>Сумма кредита</span>
          <span>{{ formatCurrency(creditAmount) }}</span>
        </div>
        <div class="offer-row">
          <span>Срок</span>
          <span>{{ Math.floor(term / 12) }} лет {{ term % 12 }} мес</span>
        </div>
        <div class="offer-row">
          <span>ПСК</span>
          <span>27,145% — 32,115%</span>
        </div>
        <div class="offer-row">
          <span>Ставка</span>
          <span style="color: #2db84c">{{ interestRate }}%</span>
        </div>
        <div class="offer-row">
          <span>Налоговый вычет</span>
          <span>{{ formatCurrency(taxDeduction) }}</span>
        </div>
        <button class="submit-btn" @click="submitApplication">Заполнить заявку</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const minPropertyPrice = 850000
const maxPropertyPrice = 87500000
const stepAmount = 10000

const minDownPaymentPercent = 0.15
const maxDownPaymentPercent = 0.8

const minTerm = 36 // 3 года в месяцах
const maxTerm = 360 // 30 лет в месяцах
const stepTerm = 1

const propertyPrice = ref(5000000)
const downPayment = ref(Math.round(propertyPrice.value * minDownPaymentPercent))
const term = ref(180) // 15 лет

const programType = ref('secondary')
const isSalaryClient = ref(false)

// Вычисляем минимальный и максимальный первоначальный взнос в зависимости от стоимости недвижимости
const minDownPayment = computed(() => Math.round(propertyPrice.value * minDownPaymentPercent))
const maxDownPayment = computed(() => Math.round(propertyPrice.value * maxDownPaymentPercent))

// Корректируем downPayment при изменении propertyPrice
watch(propertyPrice, (val) => {
  if (downPayment.value < minDownPayment.value) downPayment.value = minDownPayment.value
  if (downPayment.value > maxDownPayment.value) downPayment.value = maxDownPayment.value
})

// Обработка ручного ввода стоимости недвижимости
function onPropertyPriceInput() {
  // Ограничиваем в пределах min/max
  if (propertyPrice.value < minPropertyPrice) propertyPrice.value = minPropertyPrice
  if (propertyPrice.value > maxPropertyPrice) propertyPrice.value = maxPropertyPrice
}

// Обработка ручного ввода первоначального взноса
function onDownPaymentInput() {
  if (downPayment.value < minDownPayment.value) downPayment.value = minDownPayment.value
  if (downPayment.value > maxDownPayment.value) downPayment.value = maxDownPayment.value
}

// Обработка ручного ввода срока
function onTermInput() {
  if (term.value < minTerm) term.value = minTerm
  if (term.value > maxTerm) term.value = maxTerm
}

const creditAmount = computed(() => {
  return Math.max(propertyPrice.value - downPayment.value, 0)
})

const interestRate = computed(() => {
  if (programType.value === 'primary') {
    return isSalaryClient.value ? 7.5 : 8.5
  } else {
    return isSalaryClient.value ? 9.5 : 10.5
  }
})

const taxDeduction = computed(() => 650000)

const monthlyPayment = computed(() => {
  const n = term.value
  const rate = interestRate.value / 100 / 12
  if (!rate) return Math.round(creditAmount.value / n)
  const payment = (creditAmount.value * rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1)
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
.form-group {
  margin-bottom: 1.5rem;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #444;
}

/* Контейнер для ручного ввода и ползунка */
.input-with-range {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Ручной ввод */
.manual-input {
  width: 140px;
  padding: 0.8rem;
  border: 1px solid #bbb;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  background: #fafafa;
  box-sizing: border-box;
}

/* Ползунок */
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
  margin-top: 0.3rem;
  margin-left: 0.1rem;
}
.checkbox {
  display: flex;
  align-items: center;
}
.checkbox label {
  margin-left: 0.5rem;
  font-weight: 400;
  color: #444;
}
.disclaimer {
  font-size: 0.83rem;
  color: #999;
  margin-top: 2rem;
}
.payment-info {
  flex: 0 0 300px;
  display: flex;
  align-items: flex-start;
}
.payment-card {
  background: #fff;
  padding: 1.6rem 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  text-align: left;
  border: 1px solid #e5e5e5;
  width: 100%;
}
.offer-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  color: #222;
  text-align: center;
}
.offer-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
  font-size: 1.05rem;
  color: #444;
}
.payment-amount {
  font-size: 1.5rem;
  font-weight: 700;
  color: #222;
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
  margin-top: 1.5rem;
}
.submit-btn:hover {
  background: #21a038;
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
