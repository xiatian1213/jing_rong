// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
//import ChangePassword from '@/components/ChangePassword'
import './assets/css.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery' //引入jquery
import './utils/rem.js'

import axios from 'axios';

Vue.prototype.$=$;

import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.use(ElementUI);
Vue.config.productionTip = false;



/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: {App},
  template: '<App/>'
})
