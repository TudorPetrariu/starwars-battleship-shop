import { mockedData } from '../../assets/mock-data.js'
import { mockedData2 } from '../../assets/mock-data2.js'

export const state = {
  starWarsBattleships: [],
  battleShipsNextPage: '',
  searchedBattleship: {}
}

const mutations = {
  setBattleships: (state, payload) => {
    state.starWarsBattleships = payload.results
    state.battleShipsNextPage = payload.next
  },
  setNextPage: (state, payload) => {
    state.starWarsBattleships = state.starWarsBattleships.concat(
      payload.results
    )
    state.battleShipsNextPage = payload.next
  },
  setSearchedBattleship: (state, payload) => {
    state.searchedBattleship = payload
  }
}
const getters = {
  getSearchedBattleShip: state => {
    return state.searchedBattleship
  },
  getBattleShips: state => {
    return state.starWarsBattleships
  },
  getBattleShipDetails: state => name => {
    const findShipDetails = state.starWarsBattleships.find(
      ship => ship.name === name
    )
    return findShipDetails
  }
}

const actions = {
  async fetchSearchedBattleship ({ commit }, payload) {
    const url = 'https://swapi.dev/api/starships/?search='
    try {
      const response = await fetch(`${url} ${payload}`)
      const data = await response.json()
      commit('setSearchedBattleship', data.results)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  },

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
  },
  async getNextPage ({ commit }) {
    try {
      await new Promise(resolve => {
        setTimeout(() => {
          commit('setNextPage', mockedData2)
        }, 500)
      })
    } catch (error) {
      console.log(error)
    }
  }
  // async getNextPage ({ commit }) {
  //   const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
  //   const url = state.battleShipsNextPage
  //   try {
  //     const response = await fetch(`${corsAnywhere}${url}`)
  //     const data = await response.json()
  //     commit('setNextPage', data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
}

export default { namespaced: true, state, getters, mutations, actions }
