import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: 'v1',
    routes:[
      {
        path: '/',
        component: Home
      }
    ]

})

export default router