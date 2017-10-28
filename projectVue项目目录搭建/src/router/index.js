import Vue from 'vue'
import Router from 'vue-router'
import DoubanSearch from '@/views/douban-search/douban-search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: DoubanSearch
    }
  ]
})
