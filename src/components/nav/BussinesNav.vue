<script setup>
import { ref } from 'vue'

const navItems = {
  microBiz: {
    id: 'micro',
    list: [
      {
        title: 'Всё для малого бизнеса',
        link: '/',
        items: [],
      },
      {
        title: 'Расчетный счет',
        link: '/',
        items: [
          {
            label: 'Расчетный счет ИП',
            link: '/',
          },
          {
            label: 'Расчетный счет ООО',
            link: '/',
          },
          {
            label: 'Тарифы',
            link: '/',
          },
          {
            label: 'Бизнес-карта',
            link: '/',
          },
        ],
      },
      {
        title: 'Валютный счет',
        link: '/',
        items: [],
      },
      {
        title: 'Депозиты и овернайты',
        link: '/',
        items: [],
      },
      {
        title: 'Бонусы для бизнеса',
        link: '/',
        items: [],
      },
      {
        title: 'Регистрация бизнеса',
        link: '/',
        items: [
          {
            label: 'Регистрация ИП',
            link: '/',
          },
          {
            label: 'Регистрация ООО',
            link: '/',
          },
        ],
      },
      {
        title: 'Кредиты',
        link: '/',
        items: [
          {
            label: 'Для ИП',
            link: '/',
          },
          {
            label: 'Для ООО',
            link: '/',
          },
          {
            label: 'Оборотный кредит',
            link: '/',
          },
          {
            label: 'Овердрафт',
            link: '/',
          },
          {
            label: 'Кредитные линии',
            link: '/',
          },
        ],
      },
      {
        title: 'Стать партнером',
        link: '/',
        items: [],
      },
      {
        title: 'Прием платежей',
        link: '/',
        items: [
          {
            label: 'Торговый эквайринг',
            link: '/',
          },
          {
            label: 'Интенрнет-эквайринг',
            link: '/',
          },
          {
            label: 'Прием платежей QR',
            link: '/',
          },
          {
            label: 'Прием платежей через смартфон',
            link: '/',
          },
          {
            label: 'Онлайн-кассы',
            link: '/',
          },
          {
            label: 'Рассрочки',
            link: '/',
          },
          {
            label: 'Сбер-Pay',
            link: '/',
          },
        ],
      },
    ],
  },
  macroBiz: {
    id: 'macro',
    list: [
      {
        title: 'Всё для среднего бизнеса',
        link: '/',
        items: [],
      },
      {
        title: 'Расчетный счет',
        link: '/',
        items: [
          {
            label: 'Бизнес-карта',
            link: '/',
          },
          {
            label: 'Сопровождение по 115-ФЗ',
            link: '/',
          },
          {
            label: 'Номинальный счет',
            link: '/',
          },
        ],
      },
      {
        title: 'Регистрация бизнеса',
        link: '/',
        items: [
          {
            label: 'Регистрация ИП',
            link: '/',
          },
          {
            label: 'Регистрация ООО',
            link: '/',
          },
        ],
      },
      {
        title: 'Кредиты',
        link: '/',
        items: [],
      },
      {
        title: 'Зарплатный проект',
        link: '/',
        items: [
          {
            label: 'Выплаты сотрудникам',
            link: '/',
          },
          {
            label: 'Выплаты самозанятым',
            link: '/',
          },
          {
            label: 'Выплаты физлицам',
            link: '/',
          },
          {
            label: 'Выплаты таксопаркам',
            link: '/',
          },
          {
            label: 'Выплаты ломбардам',
            link: '/',
          },
          {
            label: 'Выплаты МФО',
            link: '/',
          },
        ],
      },
      {
        title: 'Прием платежей',
        link: '/',
        items: [
          {
            label: 'Торговый эквайринг',
            link: '/',
          },
          {
            label: 'Интернет-эквайринг',
            link: '/',
          },
          {
            label: 'Прием платежей по QR',
            link: '/',
          },
          {
            label: 'Прием платежей через смартфон',
            link: '/',
          },
          {
            label: 'Онлайн-кассы',
            link: '/',
          },
          {
            label: 'Рассрочки',
            link: '/',
          },
          {
            label: 'Сбер‑Pay',
            link: '/',
          },
        ],
      },
    ],
  },
}
const curentNav = ref(navItems.microBiz)
</script>

<template>
  <div class="nav-wraper">
    <div class="nav-select">
      <button
        :class="curentNav.id == 'micro' ? 'selected' : ''"
        @click="curentNav = navItems.microBiz"
      >
        Малый бизнес
      </button>
      <button
        :class="curentNav.id == 'macro' ? 'selected' : ''"
        @click="curentNav = navItems.macroBiz"
      >
        Средний и крупный бизнес
      </button>
    </div>
    <div class="nav-main">
      <div v-for="column in curentNav.list" :key="column.title" class="nav-column">
        <RouterLink :to="column.link" class="title">{{ column.title }}</RouterLink>
        <div v-for="item in column.items" :key="item.label" class="nav-item">
          <RouterLink :to="item.link" class="link">{{ item.label }}</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-wraper {
  background: #21a038;
  background: linear-gradient(180deg, rgba(33, 160, 56, 1) 0%, rgba(157, 199, 73, 1) 100%);
  border-radius: 32px;
  padding: 28px 28px;
  display: flex;
  color: #fff;
  width: 1000px;
  margin: 0 auto;
  max-height: 400px;
}

.nav-select {
  border-right: 1px solid #fff;
  display: flex;
  flex-direction: column;
  width: fit-content;
  max-width: 130px;
  gap: 48px;
}

.nav-select button {
  font-size: 20px;
  font-weight: 700;
  text-align: start;
  margin-right: 4px;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 8px 0;
}

.nav-select .selected {
  border-right: 1px solid #fff;
}

.nav-main {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 18px;
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
  text-decoration: none;
}

.link:hover {
  opacity: 0.8;
}

.title {
  font-weight: 700;
  padding-bottom: 12px;
  color: #fff;
  text-decoration: none;
}

.title:hover {
  opacity: 0.8;
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .nav-wraper {
    width: 100%;
    margin: 0;
    border-radius: 16px;
    padding: 20px 16px;
    flex-direction: column;
    max-height: none;
  }

  .nav-select {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #fff;
    flex-direction: row;
    max-width: none;
    gap: 16px;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  .nav-select button {
    font-size: 16px;
    margin-right: 0;
    text-align: center;
    flex: 1;
  }

  .nav-select .selected {
    border-right: none;
    border-bottom: 2px solid #fff;
  }

  .nav-main {
    flex-wrap: nowrap;
    overflow-x: auto;
  }

  .nav-column {
    padding: 0 16px 0 0;
    min-width: 200px;
  }

  .link {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .nav-wraper {
    padding: 16px 12px;
  }

  .nav-select {
    gap: 12px;
  }

  .nav-select button {
    font-size: 14px;
  }

  .nav-column {
    padding: 0 12px 0 0;
    min-width: 180px;
  }

  .link {
    font-size: 13px;
  }
}
</style>
