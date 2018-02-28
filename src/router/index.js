import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import Cart from '@/page/cart/Cart'
import Category from '@/page/category/Category'
import Me from '@/page/me/Me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    }
  ]
})
