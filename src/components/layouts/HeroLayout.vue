<template>
  <section class="hero">
    <div class="hero-title">
      <h2>{{ title }}</h2>
    </div>
    <div class="hero-description">
      <p v-html="description"></p>
    </div>
    <div class="hero-action">
      <slot></slot>
    </div>
    <div class="hero-buttons">
      <RouterLink :to="firstButtonUrl">
        <button v-html="firstButtonText"></button>
      </RouterLink>
      <RouterLink :to="secondButtonUrl">
        <button v-html="secondButtonText"></button>
      </RouterLink>
    </div>
    <img :src="imgUrl" alt="" class="hero-img" />
  </section>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  imgUrl: String,
  firstButtonText: String,
  secondButtonText: String,
  firstButtonUrl: String,
  secondButtonUrl: String,
})
</script>

<style scoped>
.hero {
  background: rgb(209, 232, 180);
  background: linear-gradient(180deg, rgba(209, 232, 180, 1) 0%, rgba(120, 198, 205, 1) 100%);
  width: 100%;
  padding: 64px;
  position: relative;
  border-radius: 10px;
  margin-bottom: 100px;
}
.hero-title {
  font-size: 24px;
  font-weight: 700;
  color: #fff;
}
.hero-description {
  font-size: 24px;
  color: #fff;
  width: 60%;
  margin: 36px 0;
}
.hero-action {
  width: 50%;
  margin-bottom: 30px;
}
.hero-buttons {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -70px;
  display: flex;
  gap: 134px;
  z-index: 2;
}
.hero-buttons button {
  background-color: #90ced3;
  border-radius: 55px;
  box-shadow: 0 4px;
  -webkit-box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  padding: 32px;
  font-size: 20px;
  text-wrap: nowrap;
}
.hero-img {
  position: absolute;
  right: 0;
  bottom: 0;
}

</style>
