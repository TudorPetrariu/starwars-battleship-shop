import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { store } from './store/store'
import { routes } from './routes.js'
import { BootstrapVue, BIconCart } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

require('regenerator-runtime/runtime')

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.component('BIconCart', BIconCart)

const router = new VueRouter({ routes, mode: 'history' })
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
