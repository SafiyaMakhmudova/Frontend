import { createRouter, createWebHistory } from "vue-router";
import {
  RT_HOME,
  MT_HOME,
  RT_LOGIN,
  MT_LOGIN,
  RT_CART,
  MT_CART,
  RT_404,
  MT_404,
  RT_CATEG,
  MT_CATEG,
} from "../constants/routeNames";

import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import { layoutMiddleware } from "./middleware";
import store from "../store";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: RT_HOME,
      component: Home,
      meta: {
        requiresAuth: false,
        title: MT_HOME,
      },
    },
    {
      path: "/book",
      name: RT_CART,
      component: ()=> import('../pages/book.vue'),
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
        layout: "Auth",
        title: MT_LOGIN,
      },
    },
    {
      path: "/category",
      name: RT_CATEG,
      component: ()=> import('../pages/Category.vue'),
      meta: {
        layout: "Auth",
        title: MT_LOGIN,
      },
    },
    {
      path: "/:pathmatch(.*)*",
      name: RT_404,
      component: () => import("../pages/404.vue"),
      meta: {
        requiresAuth: true,
        title:MT_CATEG,
      },
    },
  ],
});

function decodeJwt(token) {
  if(token) {
    const base64Payload = token.split('.')[1];
    const payloadBuffer = window.atob(base64Payload);
    return JSON.parse(payloadBuffer.toString())
  } else {
    return {exp: 0};
  }
}


router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  const parsedToken = decodeJwt(token);
  const isTokenExpired = parsedToken.exp < Date.now() /1000;

  if (to.name !== RT_LOGIN && isTokenExpired  && to.meta.requiresAuth) {
    store.commit("LOGOUT")
  } else if (!isTokenExpired && to.name === RT_LOGIN) {
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
