<script setup>
  import { RouterLink } from 'vue-router';
  import {useAuthStore} from '../stores/authStore'

  const authStore = useAuthStore();
</script>

<template>
  <header class="bg-blue-900 text-white py-6">
    <div class="container mx-auto flex justify-between items-center">
      <h2 class="font-bold text-lg">Providers control</h2>

      <nav class="flex items-center gap-8">
        <RouterLink :to="{name: 'new-provider'}" class="flex items-center gap-2 rounded py-1 px-2 hover:shadow-lg transition bg-blue-950">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
          </svg>

          Admin panel
        </RouterLink>
        <RouterLink v-if="!authStore.currentUser" :to="{name: 'login'}" class="flex items-center gap-2 rounded py-1 px-2 hover:shadow-lg transition bg-blue-950">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg>

          Login
        </RouterLink>

        <button v-else @click="authStore.logout" class="flex items-center gap-2 rounded py-1 px-2 hover:shadow-lg transition bg-red-500 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg>

          Close session
        </button>
      </nav>
    </div>
    <p v-if="authStore.currentUser" class="container mx-auto mt-2 font-bold">User: <span class="font-normal text-gray-300">{{ authStore.userName }}</span></p>
  </header>
</template>