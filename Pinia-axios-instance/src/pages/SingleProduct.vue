<template>
  <div
    v-if="loading"
    class="relative bg-slate-500 flex items-center justify-center h-screen"
  >
    <Loading />
  </div>
  <div class="container mx-auto">
    <img
      :src="product.thumbnail"
      alt=""
    />
    <div>
      {{ product.title }}
    </div>
  </div>
</template>

<script setup>
import { useProducts } from "@/composables/products";

import Loading from "@/components/Loading.vue";
import { onMounted } from "vue";
const { product, loading, fetchProduct, route } = useProducts();
onMounted(async () => {
  await fetchProduct(route.params.id);
});
</script>
