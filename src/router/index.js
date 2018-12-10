import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/Container'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
     path: '/professor/:name',
     name: 'Container',
     component: Container
   }
  ]
})
