<template>
  <Navbar />
  <div>
    <slot />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useProducts } from "@/composables/products";

import Navbar from "@/components/Navbar.vue";

const { fetchProducts } = useProducts();

onMounted(async () => {
  await fetchProducts();
});
</script>
