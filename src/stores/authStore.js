import {defineStore} from 'pinia'
import { ref, onMounted } from 'vue';
import {useFirebaseAuth} from 'vuefire'
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export const useAuthStore = defineStore('auth', () => {
    const auth = useFirebaseAuth();
    const currentError = ref('');
    const currentUser = ref(null);

    const errors = {
        'auth/invalid-login-credentials' : 'Invalid login credentials',
        'auth/wrong-password' : 'Wrong password'
    }

    onMounted(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                currentUser.value = user;
            }
        })
    })
    
    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
            // Signed in 
            currentUser.value = userCredential.user;
            //console.log(currentUser.value);
          })
          .catch((error) => {
            currentError.value = errors[error.code];
            //console.log(currentError.value);
        });
    }
    
    return{
        login,
        currentUser,
        currentError
    }
})