import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'

import Login2 from '@/components/Login2'
import Register from '@/components/Register'
import AdminLogin from "@/components/AdminLogin"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login2',
      component: Login2
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/admin/login',
      name: 'AdminLogin',
      component: AdminLogin
    }
  ]
})
