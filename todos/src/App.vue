<script setup>
import { useTodo } from "./components/index.js";

const {
  todos,
  todoo,
  addItem,
  checkupdated,
  deleteItem,
  showUpdate,
  Update,
  onSubmitUpdateModal,
  updateTodo,
} = useTodo();
</script>

<template>
  <main class="border-8 rounded-md border-green-400 m-10 p-10 text-center">
    <div class="text-center items-center">
      <h2 class="text-2xl text-slate-800 mb-8">TODO App</h2>
      <div
        class="flex w-72 sm:ml-32 md:ml-48 lg:ml-80  xl:mx-auto gap-2 "
      >
        <input
          
          class="border-2 text-xl rounded-md p-1 text-zinc-800 w-full border-green-100 bg-green-100"
          v-model="todoo.title"
          
          placeholder="Add New Task"
          type="text"
        />
        <i class='bx bx-plus' @click="addItem"></i>
        
      </div>
    </div>


    <div v-if="showUpdate" class="bg-green-200 w-[50%] text-center mx-auto mt-5 shadow-2xl     ">
      <div class="text-right  mx-auto ">
        <i class='bx bx-x-circle cursor-pointer' @click="showUpdate = false"></i>
        <div class="text-center  mr-10 ml-10  ">
          <label for="" class="text-lg text-slate-700 font-semibold block  ">Todo edit</label>
          <input class="font-semibold text-xl text-gray-600 border-2 rounded-md  capitalize bg-white h-8    w-full " v-model="updateTodo.title"/>  
        </div>
         <div class="text-center ">
          <button class="border-green-500 mb-6 rounded-md   text-gray-900 font-medium  mt-6 w-44  bg-green-400 " @click="onSubmitUpdateModal">SUBMIT</button>
        
         </div>
      
      </div>
    </div>

    <div class="mt-9 w-full  ">
      <h2 class="text-xl font-semibold mb-4 text-gray-600">Tasks</h2>
      <span v-if="todos.length == 0" class="loader">Loading</span>

      <div
        class="border-4 rounded-lg mx-auto bg-green-100 border-green-400 shadow-lg w-[50%] text-left m-2 mb-4 p-2"
        v-for="todo of todos"
      >
        <h3 class="font-bold text-xl text-gray-700 pl-3">Task {{ todo.id }}</h3>

        <div class="flex justify-between items-center text-center mt-10 p-3">
          <h4 class="font-semibold text-xl text-gray-600 capitalize">
            {{ todo.title }}
          </h4>
          <input
            class=" cursor-pointer"
            v-model="todo.completed"
            @click="checkupdated(todo.id, todo.completed, todo.title)"
            type="checkbox"
          />
        </div>

        <span class="options text-center items-center text-xl">
          <i class="fas fa-edit m-3 text-green-800 cursor-pointer" @click="Update(todo)"></i>

          <i
            @click="deleteItem(todo.id)"
            class="fas fa-trash-alt text-red-800 cursor-pointer"
          ></i>
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
  color: #abcea1;
  box-sizing: border-box; 
  animation: spotlight 2s linear infinite alternate;
}

@keyframes spotlight {
  0%,
  20% {
    opacity: 1;
    letter-spacing: 2px;
  }
  80%,
  100% {
    opacity: 0;
    letter-spacing: 32px;
  }
}

.bx-x-circle {
  font-size: 34px;
  widows: 50px;
  color: red;
  height: 35px;
  text-align: right;
}

.bx-plus {
  font-size: 34px;
  widows: 40px;
  padding-top: 2px;
  text-align: center;
  height: 35px;
  background-color: #99e085;
  border-radius: 5px;
  cursor: pointer;
}
</style>
