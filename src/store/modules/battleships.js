
import { mockedData } from '../../assets/mock-data.js'

const state = {
  starWarsBattleships: {}
}

const getters = {
  getBattleShips: state => {
    return state.starWarsBattleships
  }
}
const mutations = {
  setBattleships: (state, payload) => {
    state.starWarsBattleships = payload
  }
}

const actions = {
  async fetchBattleShips ({ commit }) {
    // const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
    // const url = 'https://swapi.dev/api/starships/?format=json'
    try {
     const searchVacancies = await new Promise(resolve => {
        setTimeout(() => {
          commit('setBattleships', mockedData.results)
        }, 800)
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default {namespaced:true, state, getters, mutations, actions }
