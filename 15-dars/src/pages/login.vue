
<script setup>

  import {onLogin} from '../composables/onlogin';
  const {obj, sendData} = onLogin()
  console.log(obj);

</script>





<template>
  <div class="border-2 w-[70%]    mx-auto shadow-lg text-center mt-14">
    <h1 class="mt-10 text-3xl text-slate-800">
        LOGIN
    </h1>
    
    <div class="p-5 h-32 mt-6 mx-auto w-[80%] ">
      <input
        class="block outline-none h-8 p-4 focus:border-green-300 border-gray-400 rounded-md    border-2 mx-auto mb-5 w-full"
        type="text"
        required
        v-model="obj.username"
        placeholder="Username"
      />
      <input
        class="w-full h-8 p-4  focus:border-green-300 outline-none border-gray-400 rounded-md border-2"
        type="password"
        minlength="6"
        required
        v-model="obj.password"
        placeholder="Password"
      />
    </div>
    <div class=" p-5 mx-auto w-[80%]">
      <button
        class="border-2 w-full text-white  text-lg border-green-400 bg-green-400"
        @click="sendData"
      >
        Login
      </button>
    </div>
  </div>
</template>

