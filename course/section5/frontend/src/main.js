import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "@/router";

import App from "./App.vue";
import JwtService from "@/services/jwt/jwt.service";
import { useAuthStore } from "@/stores/auth";

const app = createApp(App);

app.use(createPinia());

app.use(router);

app.mount("#app");

const checkLoggedIn = async () => {
  const authStore = useAuthStore();
  const token = JwtService.getToken();
  if (!token) {
    return;
  }

  try {
    await authStore.whoami();
    await router.push({ name: "home" });
  } catch (e) {
    JwtService.destroyToken();
    console.error(e);
  }
};

await checkLoggedIn();
