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
  background-color: rgb(236, 234, 234, 65);
  margin-bottom: 42px;
  padding: 24px;
  margin-top: 40px;
}
.advantages-info {
  text-align: center;
  color: #393939;
  font-size: 24px;
}
.advantages-list {
  display: flex;
  justify-content: space-between;
  margin-top: 54px;
}
.advantages-icons {
  text-align: center;
  width: 33%;
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
}
</style>
