import { mockedData } from '../../assets/mock-data.js';
import { mockedData2 } from '../../assets/mock-data2.js';

export const state = {
  starWarsBattleships: [],
  battleShipsNextPage: '',
  searchedBattleship: {},
  battleShipDetails: [],
  battleShipMovieDetails: {},
  scrollRate: ''
};

const mutations = {
  setBattleships: (state, payload) => {
    state.starWarsBattleships = payload.results;
    state.battleShipsNextPage = payload.next;
  },
  setBattleshipDetails: (state, payload) => {
    state.battleShipMovieDetails = payload;
    state.scrollRate =
      state.battleShipMovieDetails.length === 1
        ? '40%'
        : payload.length === 2
        ? '100%'
        : payload.length === 3
        ? '200%'
        : '';
  },
  setNextPage: (state, payload) => {
    state.starWarsBattleships = state.starWarsBattleships.concat(
      payload.results
    );
    state.battleShipsNextPage = payload.next;
  },
  setSearchedBattleship: (state, payload) => {
    state.searchedBattleship = payload;
  }
};
const getters = {
  getSearchedBattleShip: (state) => {
    return state.searchedBattleship;
  },
  getBattleShips: (state) => {
    return state.starWarsBattleships;
  },
  getbattleShipMovieDetails: (state) => {
    return state.battleShipMovieDetails;
  },
  getBattleShipDetails: (state) => (name) => {
    const findShipDetails = state.starWarsBattleships.find(
      (ship) => ship.name === name
    );
    state.battleShipDetails = findShipDetails;
    return state.battleShipDetails;
  },
  getScrollDuration: (state) => {
    return state.scrollRate;
  }
};

const actions = {
  async fetchBattleshipDetails({ state, commit }) {
    const filmsAppearanceUrls = state.battleShipDetails.films;
    try {
      Promise.all(
        filmsAppearanceUrls.map((url) =>
          fetch(url).then((response) => response.json())
        )
      ).then((data) => {
        commit('setBattleshipDetails', data);
      });
    } catch (error) {
      console.log(error);
    }
  },
  async fetchSearchedBattleship({ commit }, payload) {
    const url = 'https://swapi.dev/api/starships/?search=';

    try {
      const response = await fetch(`${url} ${payload}`);
      const data = await response.json();
      commit('setSearchedBattleship', data.results);
      // console.log(data)
    } catch (error) {
      console.log(error);
    }
  },

  async fetchBattleShips({ commit }) {
    try {
      await new Promise(() => {
        setTimeout(() => {
          commit('setBattleships', mockedData);
        }, 500);
      });
    } catch (error) {
      console.log(error);
    }
  },
  async getNextPage({ commit }) {
    try {
      await new Promise(() => {
        setTimeout(() => {
          commit('setNextPage', mockedData2);
        }, 500);
      });
    } catch (error) {
      console.log(error);
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
};

export default { namespaced: true, state, getters, mutations, actions };
