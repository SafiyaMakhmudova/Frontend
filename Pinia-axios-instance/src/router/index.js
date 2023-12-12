import { createRouter, createWebHistory } from "vue-router";
import { layoutMiddleware } from "./middleware";
import {
  RT_HOME,
  MT_HOME,
  RT_LOGIN,
  MT_LOGIN,
  RT_ABOUT,
  MT_ABOUT,
  RT_CART,
  MT_CART,
  RT_SINGLE_PRODUCT,
  MT_SINGLE_PRODUCT,
  AUTH_LAYOUT,
} from "@/constants/routeNames";

import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: RT_HOME,
      component: Home,
      meta: {
        requiresAuth: true,
        title: MT_HOME,
      },
    },
    {
      path: "/product/:id",
      name: RT_SINGLE_PRODUCT,
      component: () => import("../pages/SingleProduct.vue"),
      meta: {
        requiresAuth: true,
        title: MT_SINGLE_PRODUCT,
      },
    },
    {
      path: "/about",
      name: RT_ABOUT,
      component: () => import("../pages/About.vue"),
      meta: {
        requiresAuth: true,
        title: MT_ABOUT,
      },
    },
    {
      path: "/cart",
      name: RT_CART,
      component: () => import("../pages/Cart.vue"),
      meta: {
        requiresAuth: true,
        title: MT_CART,
      },
    },
    {
      path: "/login",
      name: RT_LOGIN,
      component: Login,
      meta: {
        layout: AUTH_LAYOUT,
        title: MT_LOGIN,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (to.name !== RT_LOGIN && !token) {
    next({ name: RT_LOGIN });
  } else if (token && to.name === RT_LOGIN) {
    next({ name: from.name });
  } else {
    next();
  }
});

router.beforeResolve(async (to, from) => {
  await layoutMiddleware(to);
  document.title = to.meta.title;
});

export default router;
