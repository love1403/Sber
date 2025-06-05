<template>
  <div class="nav-wraper">
    <div class="nav-main">
      <div v-for="column in navList" :key="column.title" class="nav-column">
        <RouterLink :to="column.link" class="title">{{ column.title }} </RouterLink>
        <div v-for="item in column.items" :key="item.label" class="nav-item">
          <RouterLink :to="item.link" class="link"> {{ item.label }} </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const navList = [
  {
    title: 'Полезное',
    link: '/',
    items: [
      {
        label: 'Курсы валют',
        link: '/',
      },
      {
        label: 'Банкоматы ',
        link: '/',
      },
      {
        label: 'Сбер‑Pay',
        link: '/',
      },
      {
        label: 'Платежи',
        link: '/',
      },
      {
        label: 'Контакты',
        link: '/',
      },
      {
        label: 'Приложения',
        link: '/',
      },
      {
        label: 'Спасибо от СберБанка',
        link: '/',
      },
    ],
  },
  {
    title: 'Вакансии',
    link: '/',
    items: [
      {
        label: 'Работа в IТ',
        link: '/',
      },
      {
        label: 'Бизнес и процессы',
        link: '/',
      },
      {
        label: 'Работа с клиентами',
        link: '/',
      },
    ],
  },
  {
    title: 'Отзывы',
    link: '/',
    items: [
      {
        label: 'Обзор',
        link: '/',
      },
      {
        label: 'Отзывы о компаниях',
        link: '/',
      },
      {
        label: 'Отзывы о СберБанке',
        link: '/',
      },
    ],
  },
  {
    title: 'Мерч СберБанка',
    link: '/',
    items: [
      {
        label: 'Одежда',
        link: '/',
      },
      {
        label: 'Аксессуары',
        link: '/',
      },
    ],
  },
  {
    title: 'Предложения',
    link: '/',
    items: [],
  },
  {
    title: 'Информация для партнеров',
    link: '/',
    items: [],
  },
  {
    title: 'Поддержка',
    link: '/',
    items: [],
  },
  {
    title: 'Поиск по сайту',
    link: '/',
    items: [],
  },
]
</script>

<style scoped>
.nav-wraper {
  background: #21a038;
  background: linear-gradient(180deg, rgba(33, 160, 56, 1) 0%, rgba(157, 199, 73, 1) 100%);
  border-radius: 32px;
  padding: 28px 28px;
  display: flex;
  color: #fff;
  width: 920px;
  margin: 0 auto;
  height: 470px;
  align-items: center;
  justify-content: center;
}
.nav-main {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 18px;
  max-height: 300px;
}
.nav-column {
  padding: 0 32px;
}
.nav-item {
  padding: 6px 0;
}
.link {
  color: #fff;
  font-size: 15px;
  font-weight: 300;
  word-break: break-all;
  width: fit-content;
}
.title {
  font-weight: 700;
  padding-bottom: 12px;
  color: #fff;
}
</style>
