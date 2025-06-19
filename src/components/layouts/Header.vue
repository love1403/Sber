<script setup>
import { ref, onBeforeUnmount } from 'vue'

import PeopleNav from '../nav/PeopleNav.vue'
import BussinesNav from '../nav/BussinesNav.vue'
import PrimeNav from '../nav/PrimeNav.vue'
import OtherNav from '../nav/OtherNav.vue'

const curentNav = ref('')
const isMobileMenuOpen = ref(false)

const setCurentNav = (nameNav) => {
  curentNav.value = nameNav
  // На мобильных не закрываем меню при выборе навигации
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (!isMobileMenuOpen.value) {
    curentNav.value = ''
  }
}

let navTimeout = null

const handleNavEnter = () => {
  if (navTimeout) {
    clearTimeout(navTimeout)
    navTimeout = null
  }
}

const handleNavLeave = () => {
  navTimeout = setTimeout(() => {
    curentNav.value = false
  }, 500)
}

onBeforeUnmount(() => {
  if (navTimeout) clearTimeout(navTimeout)
})
</script>

<template>
  <header @mouseenter="handleNavEnter" @mouseleave="handleNavLeave">
    <div class="header-content">
      <routerLink class="router" to="/">
        <img src="/images/logo.svg" alt="СберБанк" />
      </routerLink>

      <!-- Десктопная навигация -->
      <nav class="desktop-nav">
        <button @click="setCurentNav('people')">Частным лицам</button>
        <button @click="setCurentNav('bussines')">Бизнесу</button>
        <button @click="setCurentNav('prime')">СберПрайм</button>
        <button @click="setCurentNav('other')">Ещё</button>
      </nav>

      <!-- Кнопка СберБанк Онлайн -->
      <a href="https://online.sberbank.ru/CSAFront/index.do" class="online-btn-link">
        <button class="btn desktop-btn">СберБанк Онлайн</button>
      </a>

      <!-- Burger menu кнопка -->
      <button class="burger-btn" @click="toggleMobileMenu" :class="{ active: isMobileMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Десктопная навигация -->
    <div class="nav-conteiner desktop-nav-container">
      <PeopleNav v-if="curentNav == 'people'"></PeopleNav>
      <BussinesNav v-if="curentNav == 'bussines'" />
      <PrimeNav v-if="curentNav == 'prime'" />
      <OtherNav v-if="curentNav == 'other'" />
    </div>

    <!-- Мобильное меню -->
    <div class="mobile-menu" :class="{ open: isMobileMenuOpen }">
      <div class="mobile-nav">
        <button @click="setCurentNav('people')" :class="{ active: curentNav === 'people' }">
          Частным лицам
        </button>
        <button @click="setCurentNav('bussines')" :class="{ active: curentNav === 'bussines' }">
          Бизнесу
        </button>
        <button @click="setCurentNav('prime')" :class="{ active: curentNav === 'prime' }">
          СберПрайм
        </button>
        <button @click="setCurentNav('other')" :class="{ active: curentNav === 'other' }">
          Ещё
        </button>
      </div>

      <a href="https://online.sberbank.ru/CSAFront/index.do" class="mobile-online-btn">
        <button class="btn mobile-btn">СберБанк Онлайн</button>
      </a>
    </div>

    <!-- Мобильная навигация -->
    <div class="mobile-nav-container" v-if="isMobileMenuOpen && curentNav">
      <PeopleNav v-if="curentNav == 'people'"></PeopleNav>
      <BussinesNav v-if="curentNav == 'bussines'" />
      <PrimeNav v-if="curentNav == 'prime'" />
      <OtherNav v-if="curentNav == 'other'" />
    </div>
  </header>
</template>

<style scoped>
header {
  background: rgb(90, 176, 114);
  background: linear-gradient(
    180deg,
    rgba(90, 176, 114, 0.6110819327731092) 0%,
    rgba(155, 209, 64, 0.45) 100%
  );
  position: relative;
}

header img {
  width: 220px;
  margin: auto 0;
  padding-top: 4px;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 24px;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
}

.router {
  height: fit-content;
}

.desktop-nav {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

.desktop-nav button {
  color: #000000;
  font-size: 16px;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.desktop-nav button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.btn {
  background-color: #21a038;
  padding: 16px 12px;
  border-radius: 16px;
  color: white;
  border: none;
  cursor: pointer;
  -webkit-box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  text-wrap: nowrap;
  font-size: 14px;
  font-weight: 500;
}

.desktop-nav-container {
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 5px;
  z-index: 10;
}

/* Burger menu стили */
.burger-btn {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 25px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.burger-btn span {
  width: 100%;
  height: 3px;
  background-color: #000;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.burger-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.burger-btn.active span:nth-child(2) {
  opacity: 0;
}

.burger-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

.mobile-menu {
  display: none;
  flex-direction: column;
  gap: 20px;
  padding: 20px 24px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.mobile-nav button {
  background: none;
  border: none;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  padding: 12px 16px;
  text-align: left;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.mobile-nav button:hover,
.mobile-nav button.active {
  background-color: rgba(255, 255, 255, 0.2);
}

.mobile-online-btn {
  text-decoration: none;
}

.mobile-btn {
  width: 100%;
  padding: 16px;
  font-size: 16px;
}

.mobile-nav-container {
  padding: 0 24px 20px;
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .header-content {
    padding: 20px 16px;
  }

  header img {
    width: 160px;
  }

  .desktop-nav,
  .desktop-btn,
  .online-btn-link {
    display: none;
  }

  .burger-btn {
    display: flex;
  }

  .mobile-menu.open {
    display: flex;
  }

  .desktop-nav-container {
    display: none;
  }
}

@media (max-width: 480px) {
  .header-content {
    padding: 15px 12px;
  }

  header img {
    width: 140px;
  }

  .mobile-menu {
    padding: 15px 12px;
  }

  .mobile-nav-container {
    padding: 0 12px 15px;
  }
}
</style>
