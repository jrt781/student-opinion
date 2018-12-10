import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/Container'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Container',
      component: Container
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
