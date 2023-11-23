<script setup>
import { useProduct } from "./composables";

const {
  products,
  limitSize,
  onLimitChange,
  category,
  categorySize,
  searchWord,
  searchProduct,
} = useProduct();
</script>

<template>
  <div
    class="sm:flex sm:justify-around md:flex md:justify-around lg:flex lg:justify-around mt-5"
  >
    <div class="w-70 h-10 mt-5 items-center mx-2">
      <select
        class="w-24 h-6 pl-2 rounded-md text-base cursor-pointer"
        v-model="limitSize"
        @change="onLimitChange"
      >
        <option value="null" disabled>Limit</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
    </div>

    <div>
         <input  class="border-2 rounded-md cursor-pointer xs:mx-1 sm:w-40 md:w-60 lg:w-80 my-4 lg:mx-40 pl-3"
        type="text"
        v-model="searchWord" @input="searchProduct" placeholder="Search by title">
        
    </div>

    <div class="w-40 h-10 mt-5 items-center">
      <select
        class="xs:mx-1 md:w-30 lg:w-52 h-7 pl-2 rounded-md text-base cursor-pointer"
        v-model="categorySize"
        @change="category"
      >
        <option class="text-black" value="null" disabled>Category</option>
        <option value="men's clothing">men's clothing</option>
        <option value="jewelery">jewelery</option>
        <option value="electronics">electronics</option>
        <option value="women's clothing">women's clothing</option>
      </select>
    </div>
  </div>

  <div class="container mx-auto">
    <div class="flex items-center justify-between flex-wrap">
      <div
        v-for="product of products"
        :key="product.id"
        class="xs:w-full md:w-1/2 xl:w-1/3 2xl:w-1/4 p-3"
      >
        <div class="cursor-pointer hover:shadow-md p-2 transition-shadow">
          <img :src="product.image" width="300" height="350" alt="" />
          <h5 class="my-2 text-lg hover:text-blue-500">{{ product.title }}</h5>
          <p class="truncate text-gray-500 ttext-end">
            {{ product.description }}
          </p>
          <span class="font-semibold text-lg my-1">${{ product.price }}</span>
          <div class="flex items-center justify-between">
            <span class="bg-green-500 p-0.5 text-white rounded-lg shadow">{{
              product.category
            }}</span>
            <span class="text-amber-300">{{ product.rating.rate }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
