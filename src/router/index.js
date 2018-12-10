import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/Container'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
     path: '/professor/:name',
     name: 'Container',
     component: Container
   }
  ]
})
