import Vue from 'vue'
import Router from 'vue-router'
import list from '@/pages/list'
import detail from '@/pages/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: list
    },
    {
      path: '/cates/:catid',
      name: 'cates',
      component: list
    },
    {
      path: '/news/:newsid',
      name: 'news',
      component: detail
    }
  ]
})
