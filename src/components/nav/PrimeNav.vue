<template>
  <div class="nav-wraper">
    <div class="column" v-for="(column, index) in navColumns" :key="index">
      <p class="column-title">{{ column.title }}</p>
      <div class="column-list">
        <router-link
          class="list-item"
          v-for="item in column.items"
          :key="item.label"
          :to="item.link"
        >
          {{ item.label }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const navColumns = [
  {
    title: 'Банк',
    items: [
      {
        label: 'Кредитные карты',
        link: '/',
      },
      {
        label: 'Дебетовые карты',
        link: '/',
      },
      {
        label: 'Кредиты и ипотека',
        link: '/',
      },
      {
        label: 'Детская карта',
        link: '/',
      },
      {
        label: 'Пенсионная карта',
        link: '/',
      },
      {
        label: 'Вклады',
        link: '/',
      },
      {
        label: 'Накопительный счет',
        link: '/',
      },
      {
        label: 'Подписка ',
        link: '/',
      },
      {
        label: 'Рассрочка',
        link: '/',
      },
      {
        label: 'Ипотека',
        link: '/',
      },
      {
        label: 'Самозанятость',
        link: '/',
      },
    ],
  },

  {
    title: 'Инвестиции',
    items: [
      {
        label: 'Брокерский счет',
        link: '/',
      },
      {
        label: 'ИИС',
        link: '/',
      },
      {
        label: 'Каталог бумаг',
        link: '/',
      },
      {
        label: 'Пульс',
        link: '/',
      },
      {
        label: 'Аналитика',
        link: '/',
      },
      {
        label: 'Академия',
        link: '/',
      },
      {
        label: 'Терминал',
        link: '/',
      },
    ],
  },

  {
    title: 'Мобильная связь',
    items: [
      {
        label: 'Тарифы',
        link: '/',
      },
      {
        label: 'Пластиковая симка',
        link: '/',
      },
      {
        label: 'Электронная симка',
        link: '/',
      },
      {
        label: 'Красивые номера',
        link: '/',
      },
      {
        label: 'Услуги',
        link: '/',
      },
      {
        label: 'Перенос номера',
        link: '/',
      },
      {
        label: 'Роуминг',
        link: '/',
      },
      {
        label: 'Помощь',
        link: '/',
      },
    ],
  },

  {
    title: 'Страхование',
    items: [
      {
        label: 'ОСАГО',
        link: '/',
      },
      {
        label: 'Каско',
        link: '/',
      },
      {
        label: 'Путешествия',
        link: '/',
      },
      {
        label: 'Ипотека',
        link: '/',
      },
      {
        label: 'Квартира',
        link: '/',
      },
      {
        label: 'Здоровье',
        link: '/',
      },
      {
        label: 'Помощь на дорогах',
        link: '/',
      },
    ],
  },
]
</script>

<style scoped>
.nav-wraper {
  background: #21a038;
  background: linear-gradient(180deg, rgba(33, 160, 56, 1) 0%, rgba(157, 199, 73, 1) 100%);
  border-radius: 32px;
  padding: 28px 58px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  width: 920px;
  margin: 0 auto;
}
.column {
}
.column-title {
  font-weight: 700;
  margin-bottom: 18px;
  letter-spacing: 1px;
}
.column-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.list-item {
  color: #fff;
  font-weight: 200;
}
</style>
