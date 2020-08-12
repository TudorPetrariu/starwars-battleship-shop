import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { store } from './store/store';
import { routes } from './routes.js';

import { BootstrapVue, BIconCart } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { BootstrapVueIcons } from 'bootstrap-vue';

Vue.use(BootstrapVueIcons);

import './assets/styles/main.scss';

require('regenerator-runtime/runtime');
Vue.prototype.$eventBus = new Vue();
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.component('BIconCart', BIconCart);
const router = new VueRouter({ routes, mode: 'history' });
new Vue({
  el: '#app',
  store,
  router,
  render: (h) => h(App)
});
