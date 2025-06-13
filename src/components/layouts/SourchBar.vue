<template>
  <div class="search-container">
    <input
      v-model="query"
      @input="showSuggestions = true"
      @blur="hideSuggestions"
      placeholder="Поиск..."
      class="search-input"
      type="text"
      autocomplete="off"
    />
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
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { searchItemsConst } from '@/consts'

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
}

function hideSuggestions() {
  setTimeout(() => (showSuggestions.value = false), 100)
}
</script>

<style scoped>
.search-container {
  position: relative;
  width: 300px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.search-input {
  width: 100%;
  padding: 8px 12px;
  font-size: 16px;
  border: 1.5px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.suggestions-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 4px;
  padding: 0;
  list-style: none;
  background: white;
  border: 1px solid #ccc;
  border-radius: 0 0 4px 4px;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.suggestion-item {
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.suggestion-item:hover {
  background-color: #f0f8ff;
}
</style>
