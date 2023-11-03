<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="bg-blue-900 text-white py-6">
    <div class="container mx-auto flex justify-between items-center">
      <h2 class="font-bold text-lg">Providers control</h2>

      <div class="flex items-center gap-2">
        <label for="filter">Filter :</label>
        <input type="text" placeholder="Provider name" class="text-gray-600 p-1 rounded outline-none">
      </div>

      <nav class="flex items-center gap-8">
        <RouterLink :to="{name: 'home'}" class="flex items-center gap-2 rounded py-1 px-2 hover:shadow-lg transition bg-blue-950">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>

          Home
        </RouterLink>
        <RouterLink :to="{name: 'new-provider'}" class="flex items-center gap-2 rounded py-1 px-2 hover:shadow-lg transition bg-blue-950">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

          Add provider
        </RouterLink>
        <button class="flex items-center gap-2 rounded py-1 px-2 hover:shadow-lg transition bg-blue-950">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg>

          Close session
        </button>
      </nav>
    </div>
  </header>
</template>