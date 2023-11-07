import { computed, ref } from 'vue';
import {defineStore} from 'pinia'
import {useFirestore, useCollection} from 'vuefire'
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

export const useProvidersStore = defineStore('providers', () => {
    const db = useFirestore();
    const successMessage = ref('');

    const addNewProvider = async (provider) => {
        try {
            await addDoc(collection(db, 'providers'), provider);
            successMessage.value = 'Provided was added correctly';

            setTimeout(() => {
                successMessage.value = '';
            }, 3000);
        } catch (error) {
            console.log(error);
        }
    }

    const allProviders = useCollection(collection(db, 'providers'));

    const noResults = computed(() => {
        return allProviders.length;
    })

    return{
        addNewProvider,
        allProviders,
        noResults,
        successMessage
    }
})