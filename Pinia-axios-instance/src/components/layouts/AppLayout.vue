<template>
  <component :is="route.meta.layoutComponent">
    <slot />
  </component>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

