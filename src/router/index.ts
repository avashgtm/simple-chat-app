import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from '../store'

import Login from '../views/Login.vue'
import Chat from '../views/Chat.vue'
import Register from '../views/Register.vue'


Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { 
      guest: true
    }
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    meta: { 
      auth: true
    }
  },
  {
    path: '/sign-up',
    name: 'Register',
    component: Register,
    meta: { 
      guest: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(dt => dt.meta.auth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/') 
  }
  else if(to.matched.some(dt => dt.meta.guest)) {
    if (store.getters.isLoggedIn) {
      next('/chat')
      return
    }
    next() 
  }
  next()
})

export default router
