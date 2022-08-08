<script setup>
import { computed, defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const layout = computed(() => {
  const layoutName = route.meta?.layout ?? "DefaultLayout";
  return defineAsyncComponent(() => import(`./layouts/${layoutName}.vue`));
});
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style lang="scss">
@import "@/assets/scss/app.scss";
</style>
