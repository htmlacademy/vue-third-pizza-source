<template>
  <slot />
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { onMounted, watch } from "vue";

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();

watch(
  () => [authStore.isAuthenticated, route.meta],
  ([isAuthenticated, meta]) => {
    if (meta.requiresAuth && !isAuthenticated) {
      router.push({ name: "login", query: { redirect: route.path } });
    }
  },
  { immediate: true }
);

onMounted(authStore.whoami);
</script>
