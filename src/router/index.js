import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'MainLayout'},
    component: () => import('../views/Home/Home.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    meta: {layout: 'EmptyLayout'},
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: {layout: 'MainLayout'},
    component: () => import('../views/Categories.vue'),
  },
  {
    path: '/detail-record',
    name: 'DetailRecord',
    meta: {layout: 'MainLayout'},
    component: () => import('../views/DetailRecord.vue'),
  },
  {
    path: '/history',
    name: 'History',
    meta: {layout: 'MainLayout'},
    component: () => import('../views/History.vue'),
  },
  {
    path: '/planning',
    name: 'Planning',
    meta: {layout: 'MainLayout'},
    component: () => import('../views/Planning.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {layout: 'MainLayout'},
    component: () => import('../views/Profile.vue'),
  },
  {
    path: '/record',
    name: 'Record',
    meta: {layout: 'MainLayout'},
    component: () => import('../views/Record.vue'),
  },
  {
    path: '/auth',
    name: 'Auth',
    meta: {layout: 'EmptyLayout'},
    component: () => import('../views/Auth/Auth.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
