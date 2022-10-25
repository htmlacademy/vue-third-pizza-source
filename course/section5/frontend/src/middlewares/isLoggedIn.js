import { useAuthStore } from "@/stores/auth";

export const isLoggedIn = ({ next, nextMiddleware, to }) => {
  const authStore = useAuthStore();

  if (!authStore.isAuthenticated) {
    next({ name: "login", query: { redirect: to.fullPath } });
  } else {
    return nextMiddleware();
  }
};
