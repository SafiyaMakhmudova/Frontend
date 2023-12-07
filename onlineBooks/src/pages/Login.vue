<template>
    <form 
      class="flex text-lefte items-center"
      @submit.prevent="onSubmit"
      >
      <div class="img w-[50%]">
        <img class="w-[50&] p-8 h-screen  " src="../assets/img/Frame.png" alt="">
      </div>
      <div class=" mx-auto ">
        <h2 class="font-black text-4xl text-gray-900   ">Sign in</h2>
        <p class="mt-4 ">Do not you have an account? <a class="text-blue-400 " href="#"> Sign up</a></p>
        <div class="block mt-5 mb-8">
          <baseInput
            id="email"
            placeholder="Email"
            type="email"
            required
            v-model="email"
          />          
          <baseInput
            id="password"
            placeholder="Password"
            type="password"
            required
            v-model="password"
          />          
          
        </div>
        <baseButton type="submit">
          Next step
        </baseButton>
        <h2>{{ data }}</h2>
         </div>
    </form>
  </template>
  
  <script setup>
  import baseButton from "../components/base/base-button.vue";
  import baseInput from "../components/base/base-input.vue";
  import {Login} from "../composables/login"
  import {infoToast } from '../utils/toast';

  const {onSubmit, email, password} = Login()

  infoToast("Fill the planks", {hideProgressBar:true})

  

  </script>
  
<style  scoped>
.img {
    background-color: #C9AC8C;
}
</style>
  