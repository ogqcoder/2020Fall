import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Feed from '../views/Feed.vue'
import Admin from '../views/Admin.vue'
import Profile from '../views/Profile.vue'
import session from '../models/session'
import Autocomplete from '../views/Autocomplete.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/feed',
    name: 'Feed',
    component: Feed,
    beforeEnter: checkuser
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/autoc',
    name: 'Autocomplete',
    component: Autocomplete
  },
]

const router = new VueRouter({
  routes
})

export default router

function checkuser(to, from, next) {
  if (session.user) {
    next();
  } else {
    next('Login')
  }
}