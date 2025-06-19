<template>
  <div class="loan-calculator">
    <div class="calculator-form">
      <h2>Поможем рассчитать</h2>

      <!-- Сумма -->
      <div class="form-group">
        <label for="amount">Сколько вам нужно</label>
        <div class="input-with-range">
          <input
            id="amount"
            type="number"
            v-model.number="amount"
            :min="minAmount"
            :max="maxAmount"
            class="amount-input manual-input"
            placeholder="Введите сумму"
          />
          <input
            type="range"
            v-model.number="amount"
            :min="minAmount"
            :max="maxAmount"
            :step="stepAmount"
            class="amount-input range-input"
          />
        </div>
        <div class="input-hints">
          <span>{{ formatCurrency(minAmount) }}</span>
          <span>{{ formatCurrency(amount) }}</span>
          <span>{{ formatCurrency(maxAmount) }}</span>
        </div>
      </div>

      <!-- Срок -->
      <div class="form-group">
        <label for="term">На срок (в месяцах)</label>
        <div class="input-with-range">
          <input
            id="term"
            type="number"
            v-model.number="term"
            :min="minTerm"
            :max="maxTerm"
            class="term-input manual-input"
            placeholder="Введите срок"
          />
          <input
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
        <button class="submit-btn" @click="emit('submit')">Подать заявку</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  initialAmount: { type: Number, default: 150000 },
  initialTerm: { type: Number, default: 24 },
  interestRate: { type: Number, default: 12 },
  minAmount: { type: Number, default: 10000 },
  maxAmount: { type: Number, default: 30000000 },
  minTerm: { type: Number, default: 3 },
  maxTerm: { type: Number, default: 60 },
})

const emit = defineEmits(['submit'])

const stepAmount = 10000
const stepTerm = 1

const amount = ref(props.initialAmount)
const term = ref(props.initialTerm)

// Гарантируем, что значения не выходят за пределы
watch(amount, (val) => {
  if (val < props.minAmount) amount.value = props.minAmount
  else if (val > props.maxAmount) amount.value = props.maxAmount
})
watch(term, (val) => {
  if (val < props.minTerm) term.value = props.minTerm
  else if (val > props.maxTerm) term.value = props.maxTerm
})

const monthlyPayment = computed(() => {
  if (!amount.value || !term.value) return 0
  const principal = amount.value
  const months = term.value
  const monthlyRate = props.interestRate / 100 / 12
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

/* Контейнер для числового инпута и ползунка рядом */
.input-with-range {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Числовое поле */
.manual-input {
  width: 120px;
  padding: 0.8rem;
  border: 1px solid #bbb;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  background: #fafafa;
  box-sizing: border-box;
}

/* Ползунок занимает остальное пространство */
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

/* Планшетная версия (768px) */
@media (max-width: 768px) {
  .loan-calculator {
    flex-direction: column;
    padding: 1.5rem;
    gap: 1.5rem;
  }
  .payment-info {
    flex: none;
    margin-top: 0;
    width: 100%;
  }
  .payment-card {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
  .input-with-range {
    gap: 0.8rem;
  }
}

/* Мобильная версия (480px) */
@media (max-width: 480px) {
  .loan-calculator {
    padding: 1rem;
    border-radius: 0.8rem;
  }
  .calculator-form {
    padding: 1rem 0.8rem 0 0.8rem;
  }
  .calculator-form h2 {
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
  }
  .form-group {
    margin-bottom: 1.2rem;
  }
  .input-with-range {
    flex-direction: column;
    align-items: stretch;
    gap: 0.6rem;
  }
  .manual-input {
    width: 100%;
  }
  .input-hints {
    font-size: 0.85rem;
    justify-content: space-between;
    gap: 0;
  }
  .disclaimer {
    font-size: 0.75rem;
    margin-top: 1.5rem;
  }
  .payment-card {
    padding: 1.2rem 0.8rem;
  }
  .payment-label {
    font-size: 0.95rem;
  }
  .payment-amount {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
  }
  .submit-btn {
    font-size: 0.95rem;
    padding: 0.8rem;
  }
}
</style>
