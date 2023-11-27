<template>
    <div class="cursor-pointer hover:shadow-md p-2 transition-shadow">
        <img :src="product.image" width="300" height="350" alt="">
        <h5 class="my-2 text-lg hover:text-blue-500">{{ product.title }}</h5>
        <p class="truncate text-gray-500 ttext-end">{{ product.description }}</p>
        <div class="flex justify-between">
            <span class="font-semibold text-lg my-1">{{ product.price }}</span>
            <baseButton @click.stop="onShowUpdateModal(product)" class="btn bg-green-500">
                <span class="fa-solid fa-pen "/>
            </baseButton>
        </div>
        <div class="flex items-center justify-between">
            <span class="bg-green-500 p-0.5 text-white rounded-lg shadow">{{ product.category }}</span>
            <span>{{ product.rating.rate }}</span>
        </div>
    </div>
</template>

<script setup>

import baseButton from './base-button.vue'
    const props = defineProps({
        product: {
            type: Object,
            required: true
        }
    })
</script>
