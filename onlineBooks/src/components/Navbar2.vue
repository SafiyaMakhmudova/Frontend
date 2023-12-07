<template>
    <nav class="bg-zinc-900 pt-12 ">
        <div >
            <img class="h-80 w-[90%] mx-auto" src="../assets/img/Group 2.png" alt="">
            
        <div
         class=" bg-zinc-900 h-40 w-[80%] p-6 top-96 rounded-2xl shadow-xl mx-auto left-28    absolute ">
         <img class=" text-center mb-3  mx-auto    " src="../assets/img/Qidirish.svg" alt="">
         <div >
            <div class="flex  mx-auto w-[80%]  ">
                <input type="text" class="search w-[70%] mx-auto h-12 pl-6 rounded-2xl  " placeholder="Adiblar, kitoblar, audiolar, maqolalar...">  
                <baseButton class="btn border-orange-200 w-[20%]  "  type="submit">
                    <i class='bx bx-search-alt '></i> Izlash</baseButton>
            </div>
         </div>
        </div>
       
        </div>
    </nav>
</template>

<script setup>
import baseButton from './base/base-button.vue'

</script>

<style  scoped>
.search {
    background-color: #404040;
}


.btn {
    background-color: #C9AC8C;
    color: #4E381F;
}

</style>