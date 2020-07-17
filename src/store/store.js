import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    starWarsBattleships: {}
  },
  getters: {
    getBattleShips: state => {
      return state.starWarsBattleships
    }
  },
  mutations: {
    setBattleships: (state, payload) => {
      state.starWarsBattleships = payload
    }
  },
  actions: {
    async fetchBattleShips ({ commit }) {
      const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
      const url = 'https://swapi.dev/api/starships'
      try {
        const response = await fetch(`${corsAnywhere}${url}`)
        const data = await response.json()
        commit('setBattleships', data.results)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
