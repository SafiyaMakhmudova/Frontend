<template>
    <main class=" h-screen  flex justify-center items-center min-h-full w-full min-w-full">
      <div class="flex">
        <div class="text-indigo-600 self-start text-5xl px-8 font-bold border-r pb-8 leading-10">404</div>
        <div class="px-8">
          <h1 class="text-5xl font-bold mb-2">Page Not Found</h1>
          <p class="text-gray-400  mb-10">Please check the url in address bar and try again</p>
          <div>
            <router-link :to="{name: RT_HOME}"
              class="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Go back home
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  import { RT_HOME } from '../constants/routeNames';
  
  
  </script>
  
  <style scoped>
  
  </style>