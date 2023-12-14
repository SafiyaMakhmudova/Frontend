<template>
  <div
    v-if="loading"
    class="relative bg-slate-500 flex items-center justify-center h-screen"
  >
    <Loading />
  </div>
  <div class="container mx-auto">
    <div
      v-for="product of products"
      @click="onProductSelected(product.id)"
    >
      {{ product.title }}
    </div>
  </div>
</template>

<script setup>
import { useProducts } from "@/composables/products";
import { RT_SINGLE_PRODUCT } from "../constants/routeNames";

import Loading from "@/components/Loading.vue";
const { products, loading, router } = useProducts();

function onProductSelected(id) {
  router.push({ name: RT_SINGLE_PRODUCT, params: { id } });
}
</script>
