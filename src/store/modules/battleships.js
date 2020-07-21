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
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
    const url = 'https://swapi.dev/api/starships'
    try {
      const response = await fetch(`${url}`)
      const data = await response.json()
      commit('setBattleships', data.results)
    } catch (error) {
      console.log(error)
    }
  }
}

export default {namespaced:true, state, getters, mutations, actions }
