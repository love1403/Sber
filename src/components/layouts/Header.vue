<script setup>
import { ref, onBeforeUnmount } from 'vue'

import PeopleNav from '../nav/PeopleNav.vue'
import BussinesNav from '../nav/BussinesNav.vue'
import PrimeNav from '../nav/PrimeNav.vue'
import OtherNav from '../nav/OtherNav.vue'

const curentNav = ref('')

const setCurentNav = (nameNav) => {
  curentNav.value = nameNav
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
  }, 5000000000)
}
onBeforeUnmount(() => {
  if (navTimeout) clearTimeout(navTimeout)
})
</script>

<template>
  <header @mouseenter="handleNavEnter" @mouseleave="handleNavLeave">
    <div class="header-content">
      <routerLink class="router" to="/">
        <img src="/images/logo.svg" alt="" />
      </routerLink>
      <nav>
        <button @click="setCurentNav('people')">Частным лицам</button>
        <button @click="setCurentNav('bussines')">Бизнесу</button>
        <button @click="setCurentNav('prime')">СберПрайм</button>
        <button @click="setCurentNav('other')">Ещё</button>
      </nav>
      <a href="https://online.sberbank.ru/CSAFront/index.do">
        <button class="btn">СберБанк Онлайн</button>
      </a>
    </div>
    <div class="nav-conteiner">
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
  width: 1024px;
  margin: 0 auto;
}
.router {
  height: fit-content;
}
nav {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
nav button {
  color: #000000;
  font-size: 16px;
  font-weight: 500;
}
.btn {
  background-color: #21a038;
  padding: 16px 12px;
  border-radius: 16px;
  color: white;
  box-shadow: 0 4px;
  -webkit-box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  text-wrap: nowrap;
}
.nav-conteiner {
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 5px;
  z-index: 10;
}
</style>
