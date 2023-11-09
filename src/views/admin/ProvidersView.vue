<script setup>
  import Provider from '../../components/Provider.vue';
  import {useProvidersStore} from '../../stores/providersStore'
  import {useAuthStore} from '../../stores/authStore'
  import {Dialog, DialogPanel, DialogTitle, DialogDescription,} from '@headlessui/vue'

  const providersStore = useProvidersStore();
  const authStore= useAuthStore();
</script>

<template>
    <!-- Dialog for close session from here -->
    <Dialog :open="authStore.successMessage ? true : false" class="relative z-50">
        <div class="fixed top-0 flex w-screen items-center justify-end p-2">
        <DialogPanel class="w-full max-w-sm rounded-lg bg-green-100 p-5">
            <DialogTitle class="text-green-600 font-bold text-2xl">Success</DialogTitle>
            <DialogDescription class="text-gray-600">
            {{authStore.successMessage}}
            </DialogDescription>
            <button @click="authStore.successMessage = ''" class="mt-4 py-1 px-8 bg-white rounded-lg text-green-600 hover:bg-gray-50 outline-none">Agree</button>
        </DialogPanel>
        </div>
    </Dialog>

  <h1 class="my-10 text-4xl font-bold text-blue-900">Current providers</h1>

  
  
  <div v-if="providersStore.noResults" class="relative overflow-x-auto">
      <table class="w-full text-md text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" class="px-6 py-3">
                      Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Business
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Phone
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Email
                  </th>
                    <th scope="col" class="px-6 py-3">
                        Adress
                    </th>
                  <th scope="col" class="px-6 py-3">
                      Status
                    </th>
                  <th scope="col" class="px-6 py-3">
                      Actions
                    </th>
              </tr>
          </thead>
          <tbody>
              <Provider 
              v-for="provider in providersStore.allProviders"
              :provider="provider"
              :key="provider.id"
              />
            </tbody>
        </table>
    </div>

    <div v-else class="flex flex-col justify-center items-center gap-3 mt-10">
        <img src="/empty-icon.png" alt="empty" class="w-36 h-36">
        <p class="text-red-600 mt-10 font-bold">There aren't added providers yet.</p>
    </div>


</template>