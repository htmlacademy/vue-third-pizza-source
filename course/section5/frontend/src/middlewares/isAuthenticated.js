import { useAuthStore } from "@/stores/auth";

export const isLoggedIn = ({ next, nextMiddleware }) => {
  const authStore = useAuthStore();

  if (!authStore.isAuthenticated) {
    next({ name: "login" });
  } else {
    return nextMiddleware();
  }
};
