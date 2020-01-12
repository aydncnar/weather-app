import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  // route level code-splitting
  // which is lazy-loaded when the route is visited.
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../gui/views/Home/Home.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
