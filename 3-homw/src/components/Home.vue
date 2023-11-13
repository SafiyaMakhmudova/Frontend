<script setup></script>

<template>
  <main class="py-10 px-20">
    <div class="flex">
        <!-- 1-page -->
      <div class="w-1/2 py-10 px-20">
        <h1 class="text-3xl font-bold mt-3">Registration</h1>
        <p class="font-light text-xs mt-4 w-64 text-gray-400 text-justify">
          Failure will never overtake me if my determination to succeed is
          strong enough.
        </p>
        <input
          class="border border-gray-300 mt-6 w-64 h-8 p-3 rounded-md"
          type="name"
          placeholder="Name"
        />
        <br />
        <input
          class="border border-gray-300 mt-3 w-64 h-8 p-3 rounded-md"
          type="email"
          placeholder="Email"
        />
        <br />
        <input
          class="border border-gray-300 mt-3 w-64 h-8, p-3 rounded-md"
          type="password"
          placeholder="Password"
        />
        <br />
        <input
          class="border border-gray-300 mt-3 w-64 h-8 p-3 rounded-md"
          type="repeat_password"
          placeholder="Repeat password"
        />
        <br />
        <button
          class="bg-violet-600 mt-3 w-64 h-8 uppercase text-white text-xs rounded-md"
        >
          Registration
        </button>

        <p class="mt-3 h-8 w-64 text-xs text-center">
          Already have an account?
          <a class="text-xs text-indigo-600" href="#">Sign in</a>
        </p>
      </div>

      <!-- 2-page -->
      <div class="w-1/2 flex items-center justify-center">
        <i class="bx bxl-vuejs text-[100px]"></i>
      </div>
      
    </div>
  </main>
</template>

<style scoped></style>
