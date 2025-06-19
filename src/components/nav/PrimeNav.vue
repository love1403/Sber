<template>
  <div class="nav-wraper">
    <div class="nav-buttons">
      <router-link to="/"> <h2>Все подписки</h2> </router-link>
      <router-link to="/"><h3>СберПрайм</h3></router-link>
      <router-link to="/"><h3>СберПрайм+</h3></router-link>
      <router-link to="/"><h3>СберПрайм Старт</h3></router-link>
      <router-link to="/"><h3>Молодежная</h3></router-link>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.nav-wraper {
  background: #21a038;
  background: linear-gradient(180deg, rgba(33, 160, 56, 1) 0%, rgba(157, 199, 73, 1) 100%);
  border-radius: 32px;
  padding: 50px 28px;
  display: flex;
  justify-content: center;
  color: #fff;
  width: 350px;
  margin: 0 auto;
}
.nav-buttons {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 60px;
}
.nav-buttons h2 {
  font-size: 32px;
}
.nav-buttons h3 {
  font-weight: 24px;
}
a {
  color: #fff;
}

@media (max-width: 768px) {
  .nav-wraper {
    width: 100%;
    margin: 0;
    border-radius: 16px;
    padding: 30px 16px;
  }

  .nav-buttons h2 {
    font-size: 24px;
  }

  .nav-buttons h3 {
    font-size: 18px;
  }

  .nav-buttons {
    gap: 40px;
  }
}
</style>
