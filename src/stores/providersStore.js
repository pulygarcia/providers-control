import { computed, ref } from 'vue';
import {defineStore} from 'pinia'
import {useFirestore, useCollection} from 'vuefire'
import { collection, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";

export const useProvidersStore = defineStore('providers', () => {
    const db = useFirestore();
    const successMessage = ref('');
    const loading = ref(false);

    const addNewProvider = async (provider) => {
        loading.value = true;

        try {
            await addDoc(collection(db, 'providers'), provider);
            successMessage.value = 'Provided was added correctly';

            setTimeout(() => {
                successMessage.value = '';
            }, 3000);
        } catch (error) {
            console.log(error);
            
        }finally{
            loading.value = false
        }
    }

    const allProviders = useCollection(collection(db, 'providers'));

    const modifyProvider = async (providerRef, data) => {
        loading.value = true;
        try {
            await updateDoc(providerRef, data);

            successMessage.value = 'Provider was updated correctly';
            setTimeout(() => {
                successMessage.value = '';
            }, 3000);

        } catch (error) {
            console.log(error);
        }finally{
            loading.value = false;
        }
    }

    const deleteProvider = async (providerId) => {
        if(confirm('Provider will be deleted from Database')){
            await deleteDoc(doc(db, 'providers', providerId));
        }
    }

    const noResults = computed(() => {
        return allProviders.value.length
    })

    return{
        db,
        addNewProvider,
        allProviders,
        noResults,
        loading,
        successMessage,
        modifyProvider,
        deleteProvider
    }
})