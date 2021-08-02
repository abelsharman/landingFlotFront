import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vacancies',
    name: 'Vacancy',
    component: () => import(/* webpackChunkName: "vacancy" */ '../views/Vacancy.vue')
  },
  {
    path: '/sudy',
    name: 'Sudy',
    component: () => import(/* webpackChunkName: "sudy" */ '../views/Sudy.vue')
  },
  {
    path: '/modify',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "Admin" */ '../views/Admin.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
