<template>
  <app-popup>
    <router-link :to="{ name: 'orders' }" class="close">
      <span class="visually-hidden">Закрыть попап</span>
    </router-link>
    <div class="popup__title">
      <h2 class="title">Спасибо за заказ</h2>
    </div>
    <p>Мы начали готовить Ваш заказ, скоро привезём его вам ;)</p>
    <div class="popup__button">
      <router-link :to="{ name: 'orders' }" class="button">
        Отлично, я жду!
      </router-link>
    </div>
  </app-popup>
</template>

<script setup>
import AppPopup from "@/common/components/AppPopup.vue";
</script>
