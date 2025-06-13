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

    <LoanCalculator v-if="activeTab === 'Кредит'" />

    <MortgageCalculator v-else-if="activeTab === 'Ипотека'" />

    <DepozitCalculator v-else-if="activeTab === 'Вклад'" />

    <div v-else class="tab-stub">
      <div class="stub-content">Калькулятор вклада скоро появится</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LoanCalculator from './LoanCalculator.vue'
import MortgageCalculator from './MortgageCalculator.vue'
import DepozitCalculator from './DepozitCalculator.vue'

const tabs = ['Кредит', 'Ипотека', 'Вклад']
const activeTab = ref('Кредит')
</script>

<style scoped>
/* Скопируйте ваши стили для табов и контейнера */
.tabs-container {
  width: 850px;
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
</style>
