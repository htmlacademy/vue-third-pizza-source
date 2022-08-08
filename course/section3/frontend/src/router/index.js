import { createRouter, createWebHistory, RouterView } from "vue-router";

const routes = [
  {
    path: "/",
    component: RouterView,
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/HomeView.vue"),
        meta: { layout: "DefaultLayout" },
      },
      {
        path: "login",
        name: "login",
        component: () => import("@/views/LoginView.vue"),
        meta: { layout: "SimpleLayout" },
      },
    ],
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/CartView.vue"),
    meta: { layout: "DefaultLayout" },
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/views/UserView.vue"),
    meta: { layout: "DefaultLayout" },
    children: [
      {
        path: "orders",
        name: "orders",
        component: () => import("@/views/OrdersView.vue"),
      },
      {
        path: "profile",
        name: "profile",
        component: () => import("@/views/ProfileView.vue"),
      },
    ],
  },
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});
