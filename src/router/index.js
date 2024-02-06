//This page serves as routing library for the application. It creates a router instance.

//Create a router instance and set up the routing history mode
import { createRouter, createWebHistory } from 'vue-router'
//import components into application 
import HomeView from '../views/HomeView.vue'
import FormView from '../views/FormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView //use HomeView component as the content to be displayed when this route is visited
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/FormView.vue') //use synamic import to load the component lazily, which help reduce the initial bundle size of the application
    }
  ]
})

export default router //export as default so making it available for use in whole application
