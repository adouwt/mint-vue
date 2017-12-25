import Vue from 'vue'
import Router from 'vue-router'
import main from '@/page/main'
import mybook from '@/page/usercenter/my-book'
import mymovie from '@/page/usercenter/my-movie'
import mymusic from '@/page/usercenter/my-music'
import mynote from '@/page/usercenter/my-note'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/my-books',
      name: 'mybook',
      component: mybook
    },
    {
      path: '/my-movie',
      name: 'mymovie',
      component: mymovie
    },
    {
      path: '/my-music',
      name: 'mymusic',
      component: mymusic
    },
    {
      path: '/my-note',
      name: 'mynote',
      component: mynote
    }
  ]
})
