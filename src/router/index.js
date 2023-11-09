import { createRouter, createWebHistory } from 'vue-router'
import {useFirebaseAuth} from 'vuefire'
import {onAuthStateChanged} from 'firebase/auth'
import HomeView from '../views/HomeView.vue'
import AdminPanelLayout from '../views/admin/AdminPanelLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/admin',
      name: 'admin-panel',
      component: AdminPanelLayout,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '/admin/providers',
          name: 'admin-providers',
          component: () => import('../views/admin/ProvidersView.vue')
        },
        {
          path: '/admin/new',
          name: 'new-provider',
          component: () => import('../views/admin/NewProviderView.vue')
        },
        {
          path: '/admin/update/:id',
          name: 'update-provider',
          component: () => import('../views/admin/UpdateProviderView.vue')
        }
      ]
    }
  ]
})


//Guard
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(url => url.meta.requiresAuth);
  
  if(requiresAuth){
    //check if is authenticated
    try {
      await authenticateUser();

      //if it works correctly. next
      next();

    } catch (error) {
      //Isnt authenticated
      console.log(error);
      next({name: 'login'})
    }
  }else{
    //the view doesnt need auth user. Allow.
    next();
  }
})

function authenticateUser(){
  const auth = useFirebaseAuth();

  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        resolve(user)
      }else{
        reject()
      }
    })
  })
}

export default router
