<template>
  <Navbar />
  <Navbar2 />
  <div >
    <div v-if="loading" class="relative">
        <Loading/>
    </div>
    <div v-if="books.length!=0" class="  bg-zinc-900 pt-40 px-16 flex flex-wrap gap-10 pb-12" >
      
      <div
        v-for="book in books"
        class="text-white"
        @click="bookDetail(book.id)"
      >
        <img class="w-44 h-64" :src="book.photo" alt="" />
        <h2 class="text-orange-200 font-thin text-xl uppercase">
          {{ book.title }}
        </h2>
        <h4 class="font-thin">{{ book.author }}</h4>
        <i class="bx bxs-star"></i>
        <span class="p-3">{{ book.rating }}</span>
      </div>
    </div>
    <div v-else class="mt-32 mb-20  text-3xl">
      <h2 class="text-center text-red-800 ">Book not found</h2>
    </div>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Navbar2 from "../components/Navbar2.vue";
import Loading from '../components/layouts/Loading.vue'

import { useHome } from "../composables/home";
import { useBook } from "../composables/book";


const { books , loading} = useHome();
const { bookDetail } = useBook();
</script>

<style scoped></style>
