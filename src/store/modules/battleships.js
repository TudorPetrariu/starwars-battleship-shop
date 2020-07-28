import { mockedData } from '../../assets/mock-data.js'
import { mockedData2 } from '../../assets/mock-data2.js'

export const state = {
  starWarsBattleships: [],
  BattleShipInfo: ''
}

const mutations = {
  setBattleships: (state, payload) => {
    state.starWarsBattleships = payload.results
    state.BattleShipInfo = payload.next
  },
  setNextPage: (state, payload) => {
    state.starWarsBattleships = state.starWarsBattleships.concat(
      payload.results
    )
    state.BattleShipInfo = payload.next
    console.log('setNextPage', payload)
  }
}
const getters = {
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
    //   const url = state.BattleShipInfo
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
