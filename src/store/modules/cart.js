const state = {
  cart: [],
  totalPrice: 0
};

const mutations = {
  setItemToCart(state, { name, price, quantity }) {
    const record = state.cart.find((element) => element.name === name);
    !record
      ? state.cart.push({
          name,
          quantity,
          price
        })
      : (record.quantity = Number(quantity) + Number(record.quantity));
    state.totalPrice = state.totalPrice + Number(quantity) * Number(price);
  },
  removeItemFromCart(state, { name }) {
    const record = state.cart.find((element) => element.name === name);
    state.cart.splice(state.cart.indexOf(record), 1);

    state.totalPrice =
      state.totalPrice - Number(record.quantity) * Number(record.price);
  },
  clearCartItems(state) {
    state.cart = [];
  }
};

const actions = {
  deleteItemFromCart({ commit }, order) {
    commit('removeItemFromCart', order);
  },
  clearCart({ commit }) {
    commit('clearCartItems');
  }
};
const getters = {
  getCart: (state) => {
    return state.cart;
  },
  getTotalCartPrice: () => {
    return state.totalPrice;
  }
};

export default { namespaced: true, state, mutations, getters, actions };
