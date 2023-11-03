import {defineStore} from 'pinia'
import {useFirestore} from 'vuefire'
import { collection, addDoc } from "firebase/firestore";

export const useProvidersStore = defineStore('providers', () => {
    const db = useFirestore();

    const addNewProvider = async (provider) => {
        await addDoc(collection(db, 'providers'), provider);
    }

    return{
        addNewProvider
    }
})