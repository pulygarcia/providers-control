import {defineStore} from 'pinia'
import { ref, onMounted } from 'vue';
import {useRouter} from 'vue-router'
import {useFirebaseAuth} from 'vuefire'
import { signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "firebase/auth";

export const useAuthStore = defineStore('auth', () => {
    const router = useRouter();

    const auth = useFirebaseAuth();
    const currentError = ref('');
    const currentUser = ref(null);
    const userName = ref(null);
    const successMessage = ref('');

    const errors = {
        'auth/invalid-login-credentials' : 'Invalid login credentials',
        'auth/wrong-password' : 'Wrong password'
    }

    onMounted(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                currentUser.value = user;
                userName.value = currentUser.value.email;
            }
        })

    })
    
    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
            // Signed in 
            currentUser.value = userCredential.user;
            //console.log(currentUser.value);
            successMessage.value = 'Session started successfully'
            setTimeout(() => {
                successMessage.value = '';
                router.push({name: 'admin-providers'})
            }, 3000);

        })
          .catch((error) => {
            currentError.value = errors[error.code];
        });
    }

    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            currentUser.value = null;
            successMessage.value = 'User session was closed';
            setTimeout(() => {
                successMessage.value = '';
                router.push({name: 'login'})
            }, 3000);

        }).catch((error) => {
            console.log(error);
        });
    }
    
    return{
        login,
        currentUser,
        currentError,
        userName,
        logout,
        successMessage
    }
})