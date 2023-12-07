<template>
     <Navbar/>
    <div class=" bg-zinc-900 pr-12  pb-5  ">
        <div  class="flex pt-14">
            <div class="ml-14 text-center">
                <img class=" w-[100%] h-screen  " :src="book.photo" alt="">
            </div>
            <div class="ml-12 text-white w-[50%]">
                <h2 class="text-5xl font-thin text-orange-200">{{ book.title }}</h2>
             <div class="flex items-center pt-3 ">
                <h3 class="text-base text-orange-200 pr-3">{{ book.author }}</h3> 
                <span class="text-white ">|</span>
                <i class="bx bxs-star text-white pl-3 pr-2 "></i>
                <span class="text-gray-400  ">{{ book.rating }}</span>
             </div>
            <div class="mt-5 text-xl font-medium leading-loose   ">
                <h2><span class="text-gray-500 pr-3">Sahifalar soni:</span> {{ book.pages }}</h2>
                <h2><span class="text-gray-500 pr-3">Chop etilgan:</span> {{ year }}</h2>
                <h2><span class="text-gray-500 pr-3">Janri:</span> {{ book.category.name }}</h2>
                <h2><span class="text-gray-500 pr-3">Nashriyot:</span> {{ book.nashriyot }}</h2>
            </div>
            <div class="mt-5 items-center flex  ">
                <span class="text-orange-200 pr-2 ">To’liq ma’lumot</span>
                <i class='bx bx-down-arrow-alt text-orange-200  '></i>
                <div class=" ml-4 down  "></div>
            </div>
            <h4 class=" w-[100%] mt-5  font-medium">{{ book.description }}</h4>
            <div class=" mt-7 ">
                    
                <h2 class="text-orange-200 block pb-7 ">Mavjud formatlar</h2>
                <div class="flex  justify-between items-center">
                    <div class="text-center w-24 ">
                        <i class='bx bxs-book-alt '></i>
                        <h4 class="font-thin ">Qog'oz kitob</h4>
                        <h4 class="text-gray-500 ">{{ book.price }} so'm</h4>
                    </div>
                    <div class="text-center w-24 ">
                        <i class='bx bx-headphone'></i>
                        <h4 class="font-thin ">Audiokitob</h4>
                        <h4 class="text-gray-500 ">{{ book.audioBook }} soat</h4>
                        
                    </div>
                    <div class="text-center w-24 ">
                        
                        <i class='bx bx-book'></i>
                        <h4 class="font-thin ">Elektron</h4>
                        <h4 class="text-gray-500 "> pdf, epub</h4>
                    </div>
                    <button class="border-orange-300 border-2 bg-orange-300 text-amber-700  h-12 w-48   ">Javonga qo'shish</button>
                </div>
            </div>
            </div>
           
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import Navbar from '../components/Navbar.vue'
import { useBook } from '../composables/book';
const {book, bookDetail}=useBook()

const year = ref('')
const date = ref()
const dateString = ref('') 

dateString.value = book.value.published_date;
date.value = new Date(dateString.value);
year.value = date.value.getFullYear();


</script>

<style  scoped>

.down {
    border: 1px solid #C9AC8C99;
    width: 438px;
}



</style>