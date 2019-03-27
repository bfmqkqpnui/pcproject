import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import concat from '@/views/concat'
import detail from '@/views/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'home'}
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/contact',
      name: 'contact',
      component: concat
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    }
  ]
})
