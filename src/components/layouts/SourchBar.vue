<template>
  <div class="search-container">
    <div class="search-input-wrapper">
      <input
        v-model="query"
        @input="showSuggestions = true"
        @blur="hideSuggestions"
        @focus="showSuggestions = true"
        placeholder="Поиск..."
        class="search-input"
        type="text"
        autocomplete="off"
      />
      <button v-if="query" @click="clearSearch" class="clear-button" aria-label="Очистить поиск">
        ×
      </button>
    </div>

    <transition name="fade-slide">
      <ul v-if="showSuggestions && filteredItems.length" class="suggestions-list">
        <li
          v-for="item in filteredItems"
          :key="item.title"
          @mousedown.prevent="goTo(item)"
          class="suggestion-item"
        >
          {{ item.title }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { searchItemsConst } from '@/consts'

const emit = defineEmits(['close'])

const searchItems = ref(searchItemsConst)
const query = ref('')
const showSuggestions = ref(false)
const router = useRouter()

const filteredItems = computed(() => {
  if (!query.value) return []
  const q = query.value.toLowerCase()
  return searchItems.value.filter((i) => i.title.toLowerCase().includes(q))
})

function goTo(item) {
  showSuggestions.value = false
  query.value = ''
  router.push(item.link)
  emit('close')
}

function clearSearch() {
  query.value = ''
  showSuggestions.value = false
}

function hideSuggestions() {
  setTimeout(() => (showSuggestions.value = false), 150)
}
</script>

<style scoped>
.search-container {
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input {
  width: 100%;
  padding: 12px 40px 12px 15px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 30px;
  box-sizing: border-box;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.search-input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow:
    0 0 0 3px rgba(0, 123, 255, 0.25),
    0 4px 10px rgba(0, 0, 0, 0.12);
  transform: scale(1.02);
}

.clear-button {
  position: absolute;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #888;
  transition: color 0.2s;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.clear-button:hover {
  color: #ff4d4d;
}

.suggestions-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 8px;
  padding: 0;
  list-style: none;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  max-height: 300px;
  overflow-y: auto;
  box-shadow:
    0 6px 16px rgba(0, 0, 0, 0.12),
    0 0 0 1px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  animation: scale-in 0.2s ease-out;
}

.suggestion-item {
  padding: 12px 16px;
  cursor: pointer;
  transition:
    background-color 0.25s ease,
    transform 0.15s ease;
  border-bottom: 1px solid #f0f0f0;
  font-size: 15px;
}

.suggestion-item:last-child {
  border-bottom: none;
}

.suggestion-item:hover {
  background-color: #f5f9ff;
  transform: translateX(5px);
}

/* Анимации */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@keyframes scale-in {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Адаптивность */
@media (max-width: 768px) {
  .search-container {
    max-width: 100%;
    padding: 0 10px;
  }
  .search-input {
    padding: 14px 45px 14px 18px;
    font-size: 18px;
  }
  .clear-button {
    right: 18px;
    font-size: 26px;
  }
  .suggestion-item {
    padding: 14px 20px;
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .search-input {
    padding: 16px 50px 16px 20px;
    font-size: 17px;
    border-radius: 25px;
  }
  .clear-button {
    right: 20px;
    font-size: 28px;
  }
  .suggestions-list {
    border-radius: 10px;
  }
}
</style>
