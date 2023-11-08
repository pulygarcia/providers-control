<script setup>
    import {useRoute} from 'vue-router'
    import {useProvidersStore} from '../stores/providersStore'
    
    const route = useRoute();
    const providersStore = useProvidersStore();

    defineProps({
        provider:{
            type: Object
        }
    })
</script>

<template>
    <tr 
    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
    >
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{provider.name}}
        </th>

        <td class="px-6 py-4">
            {{provider.business}}
        </td>

        <td class="px-6 py-4">
            {{provider.phone}}
        </td>

        <td class="px-6 py-4">
            {{provider.email}}
        </td>

        <td class="px-6 py-4">
            <span
            class="py-1 px-3 rounded-2xl"
            :class="provider.active ? 'bg-green-200 text-green-700' : 'bg-red-300 text-red-600'"
            >
            {{provider.active === true ? 'Active' : 'Inactive'}}
        </span>
        </td>

        <td v-if="route.path === '/admin/providers'" class="px-6 py-4">
            <div class="flex gap-3">
            <button class="text-blue-500">Edit</button>
            <button @click="providersStore.deleteProvider(provider.id)" class="text-red-500">Delete</button>
            </div>
        </td>
    </tr>
</template>