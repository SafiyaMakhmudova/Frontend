<template>
  <button
    class="h-11 w-80 border-2 rounded-3xl text-white bg-blue-950"
    :type="type"
    :disabled="disabled"
  > <slot />
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: "button",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
