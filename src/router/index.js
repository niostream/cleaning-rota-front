import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import MainMenu from '../components/MainMenu.vue'
import CleaningRota from '../components/CleaningRota.vue'
import ChangePassword from '../components/ChangePassword.vue'
import RegistUser from '../components/RegistUser.vue'
import Try from '../components/Try.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/main-menu',
    name: 'mainMenu',
    component: MainMenu
  },
  {
    path: '/cleaning-rota',
    name: 'CleaningRota',
    component: CleaningRota
  },
  {
    path: '/change-password',
    name: 'ChangePassword',
    component: ChangePassword
  },
  {
    path: '/regist-user',
    name: 'RegistUser',
    component: RegistUser
  },
  {
    path: '/try',
    name: 'Try',
    component: Try
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
