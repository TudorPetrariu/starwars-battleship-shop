import { mockedData } from '../../assets/mock-data.js'

export const state = {
  starWarsBattleships: {}
}

const getters = {
  getBattleShips: state => {
    return state.starWarsBattleships
  },
  getBattleshipDetails: () => {}
}
const mutations = {
  setBattleships: (state, payload) => {
    state.starWarsBattleships = payload.results
  }
}

const actions = {
  async fetchBattleShips ({ commit }) {
    try {
      await new Promise(resolve => {
        setTimeout(() => {
          commit('setBattleships', mockedData)
        }, 500)
      })
    } catch (error) {
      console.log(error)
    }
  }
  // async fetchBattleShips ({ commit }) {
  //   const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
  //   const url = 'https://swapi.dev/api/starships/'
  //   try {
  //     const response = await fetch(`${corsAnywhere}${url}`)
  //     const data = await response.json()
  //     commit('setBattleships', data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
}

export default { namespaced: true, state, getters, mutations, actions }
