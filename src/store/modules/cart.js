const state = {
  cart:{}
}

const mutations = {
  setItemToCart (state, payload) {
    state.cart = payload
  }
}

const getters = {
  getCart: state => {
    return state.cart
  }
}

export default { namespaced: true, state, mutations, getters }
