<script setup>
import { RouterView } from "vue-router";
import { AppLayout } from "@/layouts";
</script>

<template>
  <app-layout>
    <RouterView />
  </app-layout>
</template>

<style lang="scss">
@import "@/assets/scss/app.scss";
</style>
