<script setup>
  import { RouterLink, useRoute } from 'vue-router';
  import {useAuthStore} from '../stores/authStore'

  const route = useRoute();
  const authStore = useAuthStore();
</script>

<template>
  <header class="bg-gray-900 text-white py-6">
    <div class="container mx-auto flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-0">
      <h2 class="font-bold text-xl">Admin panel</h2>

      <nav class="flex items-center gap-8">
        <RouterLink :to="{name: 'home'}" class="flex items-center gap-2 rounded py-1 px-2 hover:shadow-lg transition bg-blue-950">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>

          Home
        </RouterLink>

        <RouterLink 
          :to="{name: 'new-provider'}" 
          class="flex items-center gap-2 rounded py-1 px-2 hover:shadow-lg transition bg-blue-950"
          :class="route.path === '/admin/new' ? 'border' : ''"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

          Add <span class="hidden md:inline">provider</span>
        </RouterLink>

        <RouterLink 
          :to="{name: 'admin-providers'}" 
          class="flex items-center gap-2 rounded py-1 px-2 hover:shadow-lg transition bg-blue-950"
          :class="route.path === '/admin/providers' ? 'border' : ''"
        >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>


          List
        </RouterLink>

        <button v-if="authStore.currentUser" @click="authStore.logout" class="flex items-center gap-2 rounded py-1 px-2 hover:shadow-lg transition bg-red-500 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg>

          Close <span class="hidden md:inline">session</span>
        </button>
      </nav>
    </div>

    <div v-if="authStore.currentUser" class="flex justify-center md:justify-start gap-2 items-center container mx-auto mt-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>

      <p class="font-bold">User : <span class="font-normal text-gray-300">{{ authStore.userName }}</span></p>
    </div>
  </header>
</template>