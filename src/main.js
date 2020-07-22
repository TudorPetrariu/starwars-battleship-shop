import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, BIconCart } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { store } from './store/store'
import { routes } from './routes.js'
require('regenerator-runtime/runtime')

Vue.use(BootstrapVue)
Vue.component('BIconCart', BIconCart)
Vue.use(VueRouter)

const router = new VueRouter({ routes, mode: 'history' })
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
