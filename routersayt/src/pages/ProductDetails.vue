<template>
  <main class="h-34">
    <div class="mb-4 w-full pl-24 bg-blue-100 h-16 pt-3">
      <router-link to="/" class="text-2xl"> Home</router-link>
    </div>
    <div v-if="!bool" class="text-center">
      <span class="loader"></span>
    </div>
    <div
      v-else
      class="flex items-center justify-center border-4 border-blue-300 ml-10 mr-16   rounded-lg shadow-xl"
    >
      <productSingle :singleProduct="singleProduct" />
    </div>
  </main>
</template>

<script setup>

import { onMounted } from "vue";
import { UseProduct } from "../composables";
import { useRoute, useRouter } from "vue-router";
import productSingle from "../components/productSingle.vue";

const route = useRoute();

const { singleProduct, fetchSingleProduct, bool } = UseProduct();

onMounted(() => {
  fetchSingleProduct(route?.params?.id);
});
</script>

<style scoped>
.loader {
  font-size: 48px;
  color: black;
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  position: relative;
}
.loader:after {
  content: "Loading";
  position: relative;
  z-index: 5;
}
.loader:before {
  content: "";
  height: 6px;
  border: 1px solid;
  border-radius: 10px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  background: linear-gradient(#ff3d00 100%, transparent 0) no-repeat;
  background-size: 0% auto;
  animation: 10s lineGrow linear infinite;
}

@keyframes lineGrow {
  to {
    background-size: 100% auto;
  }
}
</style>
