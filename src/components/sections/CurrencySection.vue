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
            {{ item.sellPrice }}
            <span class="up" v-if="item.isGrowSell">▲</span>
            <span class="down" v-else>▼</span>
          </td>
          <td class="price">
            {{ item.buyPrice }}
            <span class="up" v-if="item.isGrowBuy">▲</span>
            <span class="down" v-else>▼</span>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
const currencyData = [
  {
    currency: 'USD',
    sellPrice: 102.05,
    buyPrice: 108.75,
    isGrowSell: false,
    isGrowBuy: false,
  },
  {
    currency: 'EUR',
    sellPrice: 106.05,
    buyPrice: 113.65,
    isGrowSell: true,
    isGrowBuy: false,
  },
  {
    currency: 'CNY',
    sellPrice: 14.25,
    buyPrice: 14.78,
    isGrowSell: false,
    isGrowBuy: true,
  },
]
</script>

<style scoped>
.currency {
  background: rgb(12, 168, 56);
  background: linear-gradient(180deg, rgba(12, 168, 56, 0.33) 0%, rgba(244, 238, 53, 0.33) 100%);
  border-radius: 40px;
  width: 850px;
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
