<template>
    <button class="btn" :class="variant == 'danger' ? 'bg-red-700': 'bg-blue-400'">
        <slot/>
    </button>
</template>

<script setup>

const props = defineProps(['variant'])

</script>
