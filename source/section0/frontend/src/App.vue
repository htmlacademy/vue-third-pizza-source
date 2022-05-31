<template>
  <div class="main__wrapper">
    <div class="main__header">
      <img :src="logo" width="300" height="47" alt="V!U!E! Pizza" />
    </div>
    <h1>Добро пожаловать!</h1>
    <p>
      Это проект V!U!E! Pizza для обучения на профессиональном онлайн‑курсе<br />
      <b>«Vue.js для опытных разработчиков».</b>
    </p>
  </div>
</template>

<script setup>
  import logo from '@/assets/img/logo.svg'
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
body {
  justify-content: center;
  align-items: center;
}
</style>
