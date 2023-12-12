<template>
  <nav
    class="bg-secondary py-3 flex justify-between items-center text-white px-3"
  >
    <router-link to="/"> Logo </router-link>
    <div class="w-[35%] flex justify-between items-center">
      <router-link to="/">{{ t("nav.home") }}</router-link>
      <router-link to="/about">{{ t("nav.about") }}</router-link>
      <router-link to="/cart">{{ t("nav.cart") }}</router-link>
      <n-dropdown
        trigger="click"
        :options="options"
        @select="handleSelect"
      >
        <n-button>Lang</n-button>
      </n-dropdown>
      <Button
        class="btn-warning"
        @click="onLogout"
        >{{ t("nav.logout") }}</Button
      >
    </div>
  </nav>
</template>

<script setup>
import Button from "./base/base-button.vue";
import { NDropdown, NButton } from "naive-ui";
import { useAuth } from "@/composables/auth";
import { useI18n } from "vue-i18n";

const { logout } = useAuth();
const { t, locale } = useI18n();

const options = [
  {
    label: "English",
    key: "en",
  },
  {
    label: "O'zbek",
    key: "uz",
  },
  {
    label: "Russkiy",
    key: "ru",
  },
];

function handleSelect(key) {
  locale.value = key;
  document.getElementsByClassName("n-button")[0].textContent =
    key.toUpperCase();
  localStorage.setItem("lang", key);
}

function onLogout() {
  logout();
}
</script>

<style lang="scss" scoped></style>
