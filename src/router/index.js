import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Plats',
    component: () => import('@/views/Plats.vue')
  },
  {
    path: '/Entrees',
    name: 'Entrees',
    component: () => import('@/views/Entrees.vue')
  },
  {
    path: '/Desserts',
    name: 'Desserts',
    component: () => import('@/views/Desserts.vue')
  },
  {
    path: '/Boissons',
    name: 'Boissons',
    component: () => import('@/views/Boissons.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
