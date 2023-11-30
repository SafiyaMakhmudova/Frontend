<template>
    <div>
        <div>
            <img :src="product.thumbnail" width="250" height="300" :alt="product.title">
        </div>
        <div>
            <h4>{{ product.title }}</h4>
            <n-space justify="space-between">
                <strong style="text-decoration: line-through;">{{ product.price }}</strong>
                <strong>{{ discountedPrice.toFixed(2) }}</strong>
            </n-space>
            <span>{{ product.rating }}</span>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { NSpace } from 'naive-ui';

const discountedPrice = computed(()=> props.product.price - (props.product.price / 100 * props.product.discountPercentage
))
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>

</style>