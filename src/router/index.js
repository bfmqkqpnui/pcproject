import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
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
      path: '/concat',
      name: 'concat',
      component: concat
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    }
  ]
})
