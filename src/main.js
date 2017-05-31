// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

//引用組件
import App from './App'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.css'

import store from './store'
import TimeEntries from './components/TimeEntries.vue'
//使用組件
Vue.use(VueRouter)
Vue.use(VueResource)

//实例化路由
const routes = [{
  path : '/',
  component : Home
},{
  path : '/home',
  component : Home
},{
  path : '/time-entries',
  component : TimeEntries,
  children : [{
    path : 'log-time',
    // 懒加载
    component : resolve => require(['./components/LogTime.vue'],resolve),
  }]
}];



const router = new VueRouter({
	routes
});

Vue.config.productionTip = false

//实例化vue
/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  router,
  store,
  ...App,
});