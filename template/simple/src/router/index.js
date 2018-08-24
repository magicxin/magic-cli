import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import indexRouter from 'pages/index.vue'
export default new Router({
  routes: [{
    name:'index',
    path:'/index',
    component: indexRouter
  }]
})
