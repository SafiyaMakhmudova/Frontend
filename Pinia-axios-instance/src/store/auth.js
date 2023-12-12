import { defineStore } from "pinia";
import { login } from "@/api/auth";

import router from "@/router";
import { RT_HOME, RT_LOGIN } from "@/constants/routeNames";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      user: {},
    };
  },

  actions: {
    async login(payload) {
      const res = await login(payload);
      if (!res.data?.token && res.status !== 200) {
        return;
      }
      localStorage.setItem("token", res.data.token);
      this.user = res.data;
      router.push({ name: RT_HOME });
    },

    logout() {
      this.user = {};
      localStorage.removeItem("token");
      router.push({ name: RT_LOGIN });
    },
  },
});
