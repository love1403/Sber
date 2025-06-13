<template>
  <section class="currency">
    <h3>Обмен валюты</h3>
    <table>
      <thead>
        <tr>
          <th>Валюта</th>
          <th>Продать</th>
          <th>Купить</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in currencyData" :key="item.currency">
          <td class="currency2">{{ item.currency }}</td>
          <td class="price">
            {{ item.sellPrice.toFixed(2) }}
            <span class="up" v-if="item.isGrowSell">▲</span>
            <span class="down" v-else>▼</span>
          </td>
          <td class="price">
            {{ item.buyPrice.toFixed(2) }}
            <span class="up" v-if="item.isGrowBuy">▲</span>
            <span class="down" v-else>▼</span>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const API_KEY = 'cur_live_BTyn5yHEmZ4a9eFMcBKbjbgYGklA1ya8Er0wZFxd'

const currencyData = ref([])

// Функция для генерации случайного true/false
function randomBool() {
  return Math.random() >= 0.5
}

async function fetchCurrencyRates() {
  try {
    // Запрос к currencyapi.com, base_currency=RUB, получаем курсы валют к рублю
    const response = await fetch(`https://api.currencyapi.com/v3/latest?base_currency=RUB`, {
      headers: {
        apikey: API_KEY,
      },
    })
    const data = await response.json()
    const rates = data.data

    // Формируем массив для отображения, исключая RUB
    const currencies = Object.keys(rates)
      .filter((c) => c !== 'RUB')
      .map((currency) => {
        const rate = rates[currency].value
        // Для демонстрации: цена продажи и покупки немного различаются (±1-2%)
        const sellPrice = rate * (1 + Math.random() * 0.02)
        const buyPrice = rate * (1 - Math.random() * 0.02) * 1.1
        return {
          currency,
          sellPrice,
          buyPrice,
          isGrowSell: randomBool(),
          isGrowBuy: randomBool(),
        }
      })

    currencyData.value = currencies
  } catch (error) {
    console.error('Ошибка при загрузке курсов валют:', error)
  }
}

onMounted(() => {
  fetchCurrencyRates()
})
</script>

<style scoped>
/* Ваши стили без изменений */
.currency {
  background: rgb(12, 168, 56);
  background: linear-gradient(180deg, rgba(12, 168, 56, 0.33) 0%, rgba(244, 238, 53, 0.33) 100%);
  border-radius: 40px;
  width: 850px;
  height: 500px;
  overflow-y: auto;
  padding: 16px 24px;
  margin: 64px auto;
  margin-bottom: 36px;
  box-shadow: 0 4px;
  -webkit-box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
}
h3 {
  font-size: 36px;
  font-weight: 400;
  margin-bottom: 18px;
  text-align: center;
}
table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}
thead {
  color: #2a2a2a;
}
tbody {
  color: #2a2a2a;
}
tbody td {
  border-bottom: 1px solid #fff;
  padding: 16px 24px;
}
tbody tr:last-child td {
  border-bottom: none;
}
.currency2 {
  font-size: 36px;
  font-weight: 600;
}
.price {
  font-size: 24px;
  color: #000;
}
th {
  font-size: 13px;
  font-weight: 500;
  text-align: center;
}
td {
  text-align: center;
}
.up {
  color: #0c5c23;
}
.down {
  color: #c70000;
}
</style>
