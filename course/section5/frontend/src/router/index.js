import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { middlewarePipeline } from "@/middlewares/middlewarePipeline";

export const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  const middlewares = to.meta.middlewares ?? [];
  if (middlewares.length === 0) {
    return next();
  }

  const context = { to, from, next };
  const firstMiddlewareIndex = 0;
  const nextMiddlewareIndex = 1;

  return middlewares[firstMiddlewareIndex]({
    ...context,
    nextMiddleware: middlewarePipeline(
      context,
      middlewares,
      nextMiddlewareIndex
    ),
  });
});
