import Vue from 'vue'
import Vuex from 'vuex'
import battleships from './modules/battleships'
import cart from './modules/cart'


Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    battleships,
    cart
  }
})
