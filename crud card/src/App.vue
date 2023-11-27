<script setup>
import { useProduct } from './composables';

import baseButton from './components/base-button.vue';
import BInput from './components/base-input.vue';
import baseSelect from './components/base-select.vue';
import baseDelete from './components/base-delete.vue';
import ProductItem from './components/ProductItem.vue';

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
  limitOptions,
  productUpdate,
} = useProduct()

</script>

<template>
  <nav class="flex items-center justify-between py-5 px-2 bg-gray-700 h-20 shadow-lg mb-4">
    <div>
      <baseSelect v-model="limitSize" @update:modelValue="onLimitChange" :options="limitOptions"></baseSelect>
    </div>
    <div>
      <baseButton class="me-1" @click="showAddModal = !showAddModal">Add item</baseButton>
      <baseButton class="me-1" @click="showDeleteModal = !showDeleteModal">Delete item</baseButton>
    </div>
  </nav>
  <div v-if="showUpdateModal" class="absolute w-[50%] bg-gray-400 h-[70%] left-[20%] p-3 overflow-y-scroll">
    <div class="text-right mb-6">
      <baseButton class="p-1 px-2 bg-red-700" @click="showUpdateModal = false">X</baseButton>
    </div>
    <form @submit.prevent="onSubmitUpdateModal">
      <div class="mb-2">
        <BInput id="p-title" label="Product title" placeholder="Product title..." v-model="productUpdate.title"
          :value="productUpdate.title" />
      </div>
      <div>
        <label class="block mb-1" for="desc">Product description</label>
        <textarea v-model="productUpdate.description" class="w-full" id="desc" cols="30" rows="5"></textarea>
      </div>
      <div class="flex items-center justify-between">
        <div>
          <BInput id="image" label="Product image" placeholder="Product image path..." v-model="productUpdate.image"
            :value="productUpdate.image" />
        </div>
        <div>
          <BInput id="cat" label="Product category" placeholder="Product category" v-model="productUpdate.category"
            :value="productUpdate.category" />
        </div>
      </div>
      <div class="flex items-center justify-between mb-3">
        <div>
          <BInput id="price" label="Product price" type="number" placeholder="Product price..." v-model="productUpdate.price"
            :value="productUpdate.price" />
        </div>
        <div>
          <BInput id="count" label="Product count" type="number" placeholder="Product count..."
            v-model="productUpdate.rating.count" :value="productUpdate.rating.count" />
        </div>
      </div>
      <baseButton class="block w-full">Update</baseButton>
    </form>
  </div>
  <div v-if="showDeleteModal" class="absolute w-[50%] bg-gray-400 h-[70%] left-[20%] p-3 overflow-y-scroll">
    <div class="text-right mb-6">
      <baseButton class="p-1 px-2" variant="danger" @click="showDeleteModal = false">
        X
      </baseButton>
    </div>
    
      <baseDelete
      v-for="product in products"
      :key="product.id"
      :item="product"
      @update:deleteValue="onDeleteItem"
    />

  </div>
  <div v-if="showAddModal" class="absolute w-[50%] bg-gray-400 h-auto left-[20%] p-3">
    <div class="text-right">
      <button class="p-1 px-2 bg-red-700" @click="showAddModal = false">X</button>
    </div>
    <form @submit.prevent="onSubmitAddItem">
      <div class="mb-2">
        <BInput id="p-title" label="Product title" placeholder="Product title..." v-model="product.title" />
      </div>
      <div>
        <label class="block mb-1" for="desc">Product description</label>
        <textarea v-model="product.description" class="w-full" id="desc" cols="30" rows="5"></textarea>
      </div>
      <div class="flex items-center justify-between">
        <div>
          <BInput id="image" label="Product image" placeholder="Product image path..." v-model="product.image" />
        </div>
        <div>
          <BInput id="cat" label="Product category" placeholder="Product category" v-model="product.category" />
        </div>
      </div>
      <div class="flex items-center justify-between mb-3">
        <div>
          <BInput id="price" label="Product price" type="number" placeholder="Product price..." v-model="product.price" />
        </div>
        <div>
          <BInput id="count" label="Product count" type="number" placeholder="Product count..."
            v-model="product.rating.count" />
        </div>
      </div>
      <baseButton class="btn block w-full">Add</baseButton>
    </form>
  </div>

  <div class="container mx-auto">
    <div class="flex items-center justify-between flex-wrap">
      <div v-for="product of products" :key="product.id" class="xs:w-full md:w-1/2 xl:w-1/3 2xl:w-1/4 p-3">
        <ProductItem 
                :product="product" 
                @click="onShowUpdateModal(product.id)"
            />
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
