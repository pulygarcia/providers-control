import { computed, ref } from 'vue';
import {defineStore} from 'pinia'
import {useFirestore, useCollection} from 'vuefire'
import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";

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

    const deleteProvider = async (providerId) => {
        if(confirm('Provider will be deleted from Database')){
            await deleteDoc(doc(db, 'providers', providerId));
        }
    }

    const noResults = computed(() => {
        return allProviders.value.length
    })

    return{
        addNewProvider,
        allProviders,
        noResults,
        successMessage,
        deleteProvider
    }
})