import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/Container'
import Home from '@/components/Home'
import Review from '@/components/Review'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        // eslint-disable-next-line
        title: route => {return 'Student Opinion'},
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: Home,
      meta: {
        // eslint-disable-next-line
        title: route => {return 'Student Opinion - Search'},
      }
    },
    {
      path: '/professor/:code',
      name: 'Container',
      component: Container,
      meta: {
       title: route => {return 'Student Opinion - ' + route.params.code.replace(/-/g, ' ').replace(
           /\w\S*/g,
           function(txt) {
               return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
           }
       );},
      }
    },
    {
      path: '/professor/:code/review',
      name: 'Review',
      component: Review,
      props: true,
      meta: {
        title: route => {return 'Student Opinion - Review ' + route.params.code.replace(/-/g, ' ').replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );},
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title(to)
  next()
})

export default router
