<script setup>
    const props = defineProps({
        product: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <div>
        <img class="w-96 h-72 object-cover " :src="product.images[0]" alt="">
                <h3 class="mt-5 text-xl text-slate-800 h-14">{{product.title}}</h3>
                <h4 class="mt-2 text-xl text-slate-900">${{ product.price }}</h4>
                <p class="w-full text-slate-600 h-16 ">{{ product.description }}</p>
                <div class="flex justify-between mt-5 items-center  ">
                    <h4 class="bg-blue-400 border-2 rounded-md p-3 text-white ">{{ product.category }}</h4>
                    <h4 class="text-slate-800 ">{{ product.rating }}</h4>
                </div>
    </div>
</template>

