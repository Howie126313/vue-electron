import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Setting from './views/setting.vue'
import Image from './views/image.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/image',
      name: 'image',
      component: Image
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    }
  ]
})
