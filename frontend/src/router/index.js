import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignUp from '@/components/account/SignupPage'
import Login from '@/components/account/LoginPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      // need to change homepage component
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/account/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/account/login',
      name: 'login',
      component: Login
    }
  ]
})
