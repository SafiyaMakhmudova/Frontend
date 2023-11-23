<script setup>


import { useTodo }  from './components/index.js';

const {fetchUrlm ,todos} = useTodo()

</script>

<template>
  <main class="border-8 rounded-md  border-green-400   m-10 p-10  text-center   ">
    <div class="text-center items-center  " >
      <h2 class="text-2xl text-slate-800 mb-8     ">TODO App</h2>
      <div class=" flex w-72   sm:ml-32  md:ml-48    lg:ml-80  xl:96 text-center items-center     gap-2     ">  
        <input class="border-2 text-xl rounded-md p-1      text-zinc-800 w-full  border-green-100 bg-green-100  " type="text" placeholder="Add New Task">
        <button class="  w-10  text-3xl border-2  border-green-300 rounded-md text-center  font-semibold  bg-green-300    ">+</button>
      </div>
    </div>

    <div class="  mt-9   w-full text-center items-center justify-center ">
      <h2 class="text-xl font-semibold mb-4 text-gray-600">Tasks</h2>
      <span v-if="todos.length==0" class="loader">Loading</span>
    
      <div class="border-4 rounded-lg bg-green-100   border-green-400   w-[50%] text-left m-2 mb-4 p-2  " v-for="todo of todos" :key="todo.id">
        <h3 class="font-bold text-xl text-gray-700 pl-3">Task {{ todo.id  }}</h3>
        
        <div class="flex justify-between items-center text-center  mt-10 p-3">
          <h4 class="font-semibold text-xl text-gray-600 capitalize   ">{{ todo.title }}</h4>
          <input v-model="todo.completed"   type="checkbox">
        </div>

        <span class="options text-center items-center text-xl">
          <i class="fas fa-edit m-3 text-green-800 "></i>
          <i class="fas fa-trash-alt text-red-800 "></i>
        </span>
      </div>
    </div>
  </main>
    
</template>

<style scoped>

.loader {
  font-size: 48px;
  font-weight: 600;
  display: inline-block;
  letter-spacing: 2px;
  font-family: Arial, Helvetica, sans-serif;
  color: #ABCEA1;
  box-sizing: border-box;
  animation: spotlight 2s linear infinite alternate;
}

@keyframes spotlight {
  0% , 20% {
    opacity: 1;
    letter-spacing: 2px;
   }
 80% , 100% {
    opacity: 0;
    letter-spacing: 32px;
   }
}
      
</style>
