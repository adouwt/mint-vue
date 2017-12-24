import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import cinema from '@/page/cinema'
import music from '@/page/music'
import books from '@/page/books'
import center from '@/page/myCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: cinema
    },
    {
      path: '/music',
      name: 'music',
      component: music
    },
    {
      path: '/books',
      name: 'books',
      component: books
    },
    {
      path: '/mycenter',
      name: 'center',
      component: center
    }
  ]
})
