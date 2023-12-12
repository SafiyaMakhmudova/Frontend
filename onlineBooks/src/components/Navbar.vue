<template>
  <nav class="flex stinky text-white  h-20 w-full bg-zinc-900 p-5 pl-20 justify-between text-center pb-4">
    <img class="w-24 "  src="../assets/img/Badiiyat.svg" alt="">
    <div
      class="w-[75%] flex justify-between  gap-4 items-center">
      <router-link to="/" class="text-lg link">{{ t("nav.home") }}</router-link>
   
      <div v-for="item in category">
        <a class="text-sm categ" @click="getCategory(item.name)">{{ item.name }}</a>
      </div>
        <baseButton class="w-[15%] border-blue-950    ml-10 mr-12" type="submit" @click="logout">{{ t("nav.logout") }}</baseButton>
      
      <n-dropdown
        trigger="click"
        :options="options"
        @select="handleSelect"
      >
        <n-button>Lang</n-button>
      </n-dropdown>
      

      <div >
        <i class='bx bxs-circle'></i>
        <i class='bx bx-chevron-down'></i>
      </div>
    </div>
  </nav>
  <div class="HR"></div>
</template>

<script setup>

import {useStore} from 'vuex'
import baseButton from './base/base-button.vue';
import {useCategory} from '../composables/nav'
import { useHome } from "../composables/home";
import { useI18n } from "vue-i18n";

import { NDropdown, NButton } from "naive-ui";

const {getCategory} = useHome();
const { category } = useCategory();
const store = useStore();
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


function logout() {
  store.commit("LOGOUT");
}

</script>

<style scoped>

.HR {
  border: 1px solid gray;
}

.categ {
  transition: color 0.3s;
  cursor: pointer;
}

.categ:hover {
  color: #C9AC8C;
}

.router-link-exact-active{
  border-bottom:3px white solid;

}


</style>
