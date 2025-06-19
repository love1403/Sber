<template>
  <section class="advantages">
    <div class="advantages-info">
      <h3>Возможности СберБанк Онлайн</h3>
    </div>

    <div class="advantages-list">
      <div class="advantages-icons">
        <img src="/images/ios/advantages1.png" alt="" />
        <h4>
          Управляйте деньгами не выходя <br />
          из дома
        </h4>
        <p>
          Открывайте вклады и виртуальные <br />
          карты, получайте и выплачивайте <br />
          кредиты где бы вы ни находились — <br />
          без визита в офис
        </p>
      </div>

      <div class="advantages-icons">
        <img src="/images/ios/advantages2.png" alt="" />
        <h4>
          Оплачивайте услуги <br />
          вовремя
        </h4>
        <p>
          Платите за сотовую связь, интернет, <br />
          коммуналку, налоги и многое другое <br />
          за пару кликов
        </p>
      </div>

      <div class="advantages-icons">
        <img src="/images/ios/advantages3.png" alt="" />
        <h4>
          Переводите деньги когда <br />
          и как удобно
        </h4>
        <p>
          Отправляйте деньги <br />
          по номеру телефона, карты, <br />
          или счёта
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.advantages {
  background-color: rgba(236, 234, 234, 0.65);
  margin-bottom: 42px;
  padding: 24px;
  margin-top: 40px;
  border-radius: 18px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
  animation: fadeInUp 0.8s;
}
.advantages-info {
  text-align: center;
  color: #393939;
  font-size: 24px;
  font-weight: 700;
}
.advantages-list {
  display: flex;
  justify-content: space-between;
  margin-top: 54px;
  gap: 30px;
}
.advantages-icons {
  text-align: center;
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 1s;
}
.advantages-icons img {
  width: 80px;
  height: 80px;
  max-width: 90vw;
  object-fit: contain;
  margin-bottom: 18px;
}
.advantages-icons h4 {
  font-size: 18px;
  color: #393939;
  font-weight: 600;
  margin-top: 15px;
  margin-bottom: 11px;
}
.advantages-icons p {
  font-size: 15px;
  color: #393939;
  font-weight: 400;
  margin-bottom: 0;
}

/* Планшеты */
@media (max-width: 768px) {
  .advantages {
    padding: 14px 4vw;
    margin-top: 24px;
  }
  .advantages-info {
    font-size: 18px;
  }
  .advantages-list {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-top: 28px;
  }
  .advantages-icons {
    width: 100%;
    margin-bottom: 10px;
  }
  .advantages-icons img {
    width: 90px;
    height: 90px;
    margin-bottom: 12px;
  }
  .advantages-icons h4 {
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 7px;
  }
  .advantages-icons p {
    font-size: 13px;
  }
}

/* Мобильные устройства */
@media (max-width: 480px) {
  .advantages {
    padding: 8px 2vw;
    margin-top: 10px;
    margin-bottom: 18px;
    border-radius: 10px;
  }
  .advantages-info {
    font-size: 13px;
  }
  .advantages-list {
    gap: 14px;
    margin-top: 12px;
  }
  .advantages-icons img {
    max-width: 50px;
    height: auto;
    margin-bottom: 8px;
    border-radius: 12px;
  }
  .advantages-icons h4 {
    font-size: 11px;
    margin-top: 6px;
    margin-bottom: 4px;
  }
  .advantages-icons p {
    font-size: 9px;
    line-height: 1.3;
  }
}

/* Анимации */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
