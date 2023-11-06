<script setup>
  import Provider from '../../components/Provider.vue';
  import {useProvidersStore} from '../../stores/providersStore'

  const providersStore = useProvidersStore();

</script>

<template>
  <h1 class="my-10 text-4xl font-bold text-blue-900">current providers</h1>

  <p v-if="providersStore.noResults" class="text-red-600 mt-10 font-bold">There aren't results</p>


  
  <div v-else class="relative overflow-x-auto">
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


</template>