<!-- LimitSelector.vue -->
<template>
    <select class="px-2" :value="limitSize" @input="$emit('update:modelValue', $event.target.value)">
      <option :value="null" disabled>Limit</option>
      <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
    </select>
</template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    limitSize: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      default: () => [5, 10, 20]
    }
  });
  </script>
  