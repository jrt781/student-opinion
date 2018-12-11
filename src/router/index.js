import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/Container'
import Home from '@/components/Home'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Student Opinion',
      }
    },
    {
     path: '/professor/:name',
     name: 'Container',
     component: Container
   }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
