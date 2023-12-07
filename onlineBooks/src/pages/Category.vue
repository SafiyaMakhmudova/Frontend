<template>
    <Navbar />
    <Navbar2 />
    <div class="pt-40 bg-zinc-900 px-16 flex flex-wrap gap-10 pb-12">
      <div v-if="loading" class="relative">
          <Loading/>
      </div>
      
      <div class="text-white" 
      @click="bookDetail(categores.products[0].id)"
      >
        <img class="w-44 h-64" :src="categores.products[0].photo" alt="" /> 
       <h2 class="text-orange-200 font-thin text-xl uppercase">
        {{ categores.products[0].title }}
      </h2>
      <h4 class="font-thin">{{ categores.products[0].author }}</h4>
      <i class="bx bxs-star"></i>
      <span class="p-3">{{ categores.products[0].rating }}</span>
    
      </div>
    </div>
  </template>
  
  <script setup>
  import Navbar from "../components/Navbar.vue";
  import Navbar2 from "../components/Navbar2.vue";
  import Loading from '../components/layouts/Loading.vue'
  
  import { useHome } from "../composables/home";
  import { useBook } from "../composables/book";
  const { bookDetail } = useBook();
  
  const { categores , loading} = useHome();
  </script>
  
  <style scoped></style>
  