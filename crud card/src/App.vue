<script setup>
import { useProduct } from './composables';

import baseButton from './components/base-button.vue';
import BInput from './components/base-input.vue';

const {
  products, 
  limitSize, 
  onLimitChange, 
  showAddModal, 
  showDeleteModal, 
  showUpdateModal, 
  onSubmitAddItem, 
  onSubmitUpdateModal,
  product, 
  onDeleteItem,
  onShowUpdateModal,
} = useProduct()

</script>

<template>
  <nav class="flex items-center justify-between py-5 px-2 bg-gray-700 h-20 shadow-lg mb-4">
    <div>
      <select class="px-2" v-model="limitSize" @change="onLimitChange">
        <option value="null" disabled>Limit</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
    </div>
    <div>
      <baseButton class="me-1" @click="showAddModal = !showAddModal">Add item</baseButton>
      <baseButton class="me-1" @click="showDeleteModal = !showDeleteModal">Delete item</baseButton>
    </div>
  </nav>
  <div
    v-if="showUpdateModal" 
    class="absolute w-[50%] bg-gray-400 h-[70%] left-[20%] p-3 overflow-y-scroll"
  >
    <div class="text-right mb-6">
      <baseButton class="p-1 px-2 bg-red-700" @click="showUpdateModal = false">X</baseButton>
    </div>
    <form @submit.prevent="onSubmitUpdateModal">
        <div class="mb-2">
              <BInput 
                id="p-title" 
                label="Product title" 
                placeholder="Product title..." 
                v-model="product.title"
                :value="product.title"
              />
            </div>
            <div>
              <label class="block mb-1" for="desc">Product description</label>
              <textarea v-model="product.description" class="w-full" id="desc" cols="30" rows="5"></textarea>
            </div>
            <div class="flex items-center justify-between">
              <div>
                <BInput 
                  id="image" 
                  label="Product image"
                  placeholder="Product image path..." 
                  v-model="product.image"
                  :value="product.image"
                />
              </div>
              <div>
                <BInput 
                  id="cat" 
                  label="Product category" 
                  placeholder="Product category" 
                  v-model="product.category"
                  :value="product.category"
                />
              </div>
            </div>
            <div class="flex items-center justify-between mb-3">
              <div>
                <BInput 
                  id="price" 
                  label="Product price" 
                  type="number"
                  placeholder="Product price..." 
                  v-model="product.price"
                  :value="product.price"
                />  
              </div>
              <div>
                <BInput 
                  id="count" 
                  label="Product count" 
                  type="number"
                  placeholder="Product count..." 
                  v-model="product.rating.count"
                  :value="product.rating.count"
                />
              </div>
            </div>
        <baseButton class="block w-full">Update</baseButton>
      </form>
  </div>
  <div 
    v-if="showDeleteModal" 
    class="absolute w-[50%] bg-gray-400 h-[70%] left-[20%] p-3 overflow-y-scroll"
  >
    <div class="text-right mb-6">
      <baseButton 
        class="p-1 px-2"
        variant="danger"
        @click="showDeleteModal = false"
      >
        X
      </baseButton>
    </div>
    <div 
      v-for="item of products" 
      :key="item.id" 
      class="flex items-center justify-between mb-5 cursor-pointer bg-red-400 p-2 rounded-md"
      @click="onDeleteItem(item.id)"
    >
      <p>{{ item.title }}</p>
      <img :src="item.image" width="30" height="30" alt="">
    </div>
  </div>
  <div v-if="showAddModal" class="absolute w-[50%] bg-gray-400 h-auto left-[20%] p-3">
    <div class="text-right">
      <button class="p-1 px-2 bg-red-700" @click="showAddModal = false">X</button>
    </div>
    <form @submit.prevent="onSubmitAddItem">
      <div class="mb-2">
            <BInput 
              id="p-title" 
              label="Product title" 
              placeholder="Product title..." 
              v-model="product.title"
            />
          </div>
          <div>
            <label class="block mb-1" for="desc">Product description</label>
            <textarea v-model="product.description" class="w-full" id="desc" cols="30" rows="5"></textarea>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <BInput 
                id="image" 
                label="Product image"
                placeholder="Product image path..." 
                v-model="product.image"
              />
            </div>
            <div>
              <BInput 
                id="cat" 
                label="Product category" 
                placeholder="Product category" 
                v-model="product.category"
              />
            </div>
          </div>
          <div class="flex items-center justify-between mb-3">
            <div>
              <BInput 
                id="price" 
                label="Product price" 
                type="number"
                placeholder="Product price..." 
                v-model="product.price"
              />  
            </div>
            <div>
              <BInput 
                id="count" 
                label="Product count" 
                type="number"
                placeholder="Product count..." 
                v-model="product.rating.count"
              />
            </div>
          </div>
      <baseButton class="btn block w-full">Add</baseButton>
    </form>
  </div>

  <div class="container mx-auto">
    <div class="flex items-center justify-between flex-wrap">
      <div v-for="product of products" :key="product.id" class="xs:w-full md:w-1/2 xl:w-1/3 2xl:w-1/4 p-3">
        <ProducItem :product="product"/>
        <!-- <div class="cursor-pointer hover:shadow-md p-2 transition-shadow">
          <img :src="product.image" width="300" height="350" alt="">
          <h5 class="my-2 text-lg hover:text-blue-500">{{ product.title }}</h5>
          <p class="truncate text-gray-500 ttext-end">{{ product.description }}</p>
          <div class="flex justify-between">
            <span class="font-semibold text-lg my-1">{{ product.price }}</span>
            <baseButton @click="onShowUpdateModal(product)" class="btn bg-green-500">
              <span class="fa-solid fa-pen "/>
            </baseButton>
          </div>
          <div class="flex items-center justify-between">
            <span class="bg-green-500 p-0.5 text-white rounded-lg shadow">{{ product.category }}</span>
            <span>{{ product.rating.rate }}</span>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style>
/* .bg-wrapper {
  background-image: url('./assets/images/bg-wrap.png');
  background-repeat: no-repeat;
  background-size: cover;
} */
</style>
