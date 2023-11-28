<template>
    <div class="w-[50%] pt-3 pb-3">
                
        <img class="h-96  object-cover" :src="singleProduct?.images?.length > 0 && singleProduct?.images[0]" alt="">
    
    </div>
    <div class=" text-left pl-2 pt-2" >
                
        <h3 class="text-2xl mb-3">{{ singleProduct.title }}</h3>
        <p class="text-gray-600 mb-3 max-w-lg">{{ singleProduct.description }}</p>
        <h4 class="text-gray-800 text-lg ">Stock: {{ singleProduct.stock }}</h4>
        <h4 class="text-gray-800 text-lg ">Brand: {{ singleProduct.brand }}</h4>
        <span  class="text-gray-800 text-lg ">Category: {{ singleProduct.category }}</span>
        <h4  class="text-gray-800 text-lg "> Discount: {{ singleProduct.discountPercentage }}%</h4>
        <h4  class="text-gray-800 text-lg ">Price: ${{ singleProduct.price }}</h4>
        <p  class="text-yellow-700  text-lg ">Rating: {{ singleProduct.rating }}</p>
                
    </div>
</template>

<script setup>
 
const props = defineProps({
    singleProduct:{
        type:Object,
        required: true,
    }
})
</script>