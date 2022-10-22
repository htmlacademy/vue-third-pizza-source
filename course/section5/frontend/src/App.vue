<template>
  <auth-middleware>
    <app-layout>
      <router-view />
    </app-layout>
  </auth-middleware>
</template>

<script setup>
import AppLayout from "@/layouts/AppLayout.vue";
import AuthMiddleware from "@/AuthMiddleware.vue";
import { onMounted } from "vue";
import { useDataStore } from "@/stores/data";

const dataStore = useDataStore();

onMounted(() => {
  dataStore.loadData();
});
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
</style>
