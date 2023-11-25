<template>
    <label v-if="id" class="block mb-1" :for="id">{{ label }}</label>
    <input 
        class="w-full" 
        :type="type" 
        :id="id" 
        :value="value" 
        :placeholder="placeholder" 
        @input="$emit('update:modelValue', $event.target.value)"
    />
        <!-- @input="onInputchange" -->
</template>

<script setup>
const props = defineProps({
    id: {
        type: String,
        default: ''
    },
    label: String,
    type: {
        type: String,
        default: 'text'
    },
    placeholder: String,
    modelValue: String,
    value: String,
})

// const emit = defineEmits(['update:modelValue'])

// function onInputchange(e) {
//     emit('update:modelValue', e.target.value)
// }
</script>
