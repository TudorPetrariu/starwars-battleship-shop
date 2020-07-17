import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { store } from './store/store'

require('regenerator-runtime/runtime')

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
