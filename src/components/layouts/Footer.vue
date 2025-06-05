<script setup></script>

<template>
  <footer>
    <div class="footer-content">
      <div class="footer-social">
        <div class="social-list">
          <img src="/images/footer/tg.svg" alt="" />
          <img src="/images/footer/inst.svg" alt="" />
          <img src="/images/footer/vk.svg" alt="" />
          <img src="/images/footer/poisk.svg" alt="" />
          <img src="/images/footer/eye.svg" alt="" />
        </div>
        <p>sberbank@sberbank.ru</p>
      </div>

      <div class="footer-logo">
        <img src="/images/footer/logosber.svg" alt="" />
        <p class="adress-title">
          Россия, Москва, 117997, ул. Вавилова, 19 <br />
          © 1997—2025 ПАО Сбербанк.
        </p>
      </div>

      <div class="footer-info">
        <div class="info-content">
          <div>
            <h4>900</h4>
            <p>
              Бесплатно по России при<br />звонке в сети операторов<br />МТС, Билайн, МегаФон,
              t2,<br />Yota, Мотив
            </p>
          </div>

          <div>
            <h4>Звонок из-за границы</h4>
            <p>Стоимость звонка зависит от<br />тарифа вашего мобильного<br />оператора</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: rgb(12, 168, 56);
  background: linear-gradient(180deg, rgba(12, 168, 56, 0.33) 0%, rgba(244, 238, 53, 0.33) 100%);
}
.footer-content {
  padding: 50px 24px;
  width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer-social {
  display: flex;
  flex-direction: column;
  gap: 36px;
  align-items: center;
  width: 30%;
}
.social-list {
  display: flex;
  align-items: center;
}
.footer-logo {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.footer-logo img {
  width: 120px;
  margin: 0 auto;
}
.adress-title {
  color: rgb(0, 0, 0, 0.67);
  text-align: center;
  font-size: 13px;
}
.footer-info {
  text-align: left;
  font-size: 14px;
  width: 30%;
}
.info-content {
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-left: auto;
  width: fit-content;
}
</style>
