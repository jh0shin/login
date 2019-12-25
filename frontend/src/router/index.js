import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Users from '@/components/AllUsersPage'
import User from '@/components/UsersPage'
import SignUp from '@/components/JoinPage'
import Login from '@/components/LoginPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/user',
      name: 'user',
      component: Users
    },
    {
      path: '/user/:id',
      name: 'detail',
      component: User
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
