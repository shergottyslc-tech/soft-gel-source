import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/products', name: 'products', component: () => import('../views/ProductsView.vue') },
    { path: '/blog', name: 'blog', component: () => import('../views/BlogView.vue') },
    { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
    { path: '/contact', name: 'contact', component: () => import('../views/ContactView.vue') }
  ],
  // This ensures the page scrolls to the top when navigating between routes
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router