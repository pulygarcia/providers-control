import { computed } from 'vue';
import {defineStore} from 'pinia'
import {useFirestore, useCollection} from 'vuefire'
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

export const useProvidersStore = defineStore('providers', () => {
    const db = useFirestore();

    const addNewProvider = async (provider) => {
        await addDoc(collection(db, 'providers'), provider);
    }

    const allProviders = useCollection(collection(db, 'providers'));

    const noResults = computed(() => {
        return allProviders.length;
    })

    return{
        addNewProvider,
        allProviders,
        noResults
    }
})