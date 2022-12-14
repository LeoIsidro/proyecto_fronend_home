/*import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
        path: "/login",
        name: "login",
        component: () => import("../views/LoginView.vue"),
      },
  ],
});

export default router;*/

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },

    {
      path: "/compra1",
      name: "compra1",
      component: () => import("../views/Compra1View.vue"),
    },

    {
      path: "/compra2",
      name: "compra2",
      component: () => import("../views/Compra2View.vue"),
    },

    {
      path: "/compra3",
      name: "compra3",
      component: () => import("../views/Compra3View.vue"),
    },
    /*{
      path: "/pago",
      name: "pago",
      component: () => import("../views/PagoView.vue"),
    },*/
  ],
});

export default router;
