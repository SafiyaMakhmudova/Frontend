<!-- ProductItem.vue -->
<template>
    <div
      :key="item.id"
      class="flex items-center justify-between mb-5 cursor-pointer bg-red-400 p-2 rounded-md"
      @input="$emit('update:deleteValue', item.id)"
    >
      <p>{{ item.title }}</p>
      <img :src="item.image" width="30" height="30" alt="">
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    item: {
      type: Object,
      required: true,
    },
  });
  
  </script>
  