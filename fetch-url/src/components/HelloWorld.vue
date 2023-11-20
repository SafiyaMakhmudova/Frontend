<script setup>
import { ref } from 'vue'

const products = ref([])
const loader = ref(true)

async function fetchProduct() {
  const response = await fetch('https://fakestoreapi.com/products')
  const movies = await response.json();
  products.value = movies
  
  if(products.value) {
    loader.value = false
    console.log(products.value); 
  } else {
    console.log("Something wrong");
  }
}


</script>

<template>
  <div class="main">
    <div class="container1">
      <button  @click="fetchProduct" class="submit" type="submit">Submit</button>
      
    </div>
    <div v-if="loader" class="load">
      <span   class="loader">Load&nbsp;ng</span>
    </div>
    <div class="container" v-else-if="!loader">

    <div class="container2"  v-for="product of products">
      <ul >
        <h5 class="title1">Nearest Seller</h5>
        <img class="image" :src="product.image"  alt="">
        <h3 class="title2">{{ product.title }}</h3>
        <p class="text">Shipped in 3-4 days</p>
        <h4 class="price"> ${{ product.price }}</h4>
        
        <div class="buttons">
          <button  class=" btn btn1"> <i class='bx bx-cart-add'></i>Add <br> Cart</button>
          <button class=" btn btn2"> <i class='bx bx-shopping-bag'></i>Buy</button>
        </div>
      </ul>
    </div>
    </div>
  </div>
</template>

