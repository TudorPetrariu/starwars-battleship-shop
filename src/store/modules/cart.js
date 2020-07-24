const state = {
  cart: []
}

const mutations = {
  setItemToCart (state, { name, price, quantity }) {
    const record = state.cart.find(element => element.name === name)
    if (record) {
      record.quantity = Number(quantity) + Number(record.quantity)
    } else {
      state.cart.push({
        name,
        quantity,
        price
      })
    }
  }
}

const getters = {
  getCart: state => {
    return state.cart
  }
}

export default { namespaced: true, state, mutations, getters }
