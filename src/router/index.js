import { createRouter, createWebHistory } from 'vue-router'
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
      children: [
        {
          path: 'providers',
          name: 'admin-providers',
          component: () => import('../views/admin/ProvidersView.vue')
        },
        {
          path: '/new',
          name: 'new-provider',
          component: () => import('../views/admin/NewProviderView.vue')
        },
        {
          path: '/update/:id',
          name: 'update-provider',
          component: () => import('../views/admin/UpdateProviderView.vue')
        }
      ]
    }
  ]
})

export default router
