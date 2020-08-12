const state = {
  cart: [],
  totalPrice: 0,
  ordersHistory: []
};

const mutations = {
  setRecentOrders(state, { cartItems, finalOrder }) {
    state.ordersHistory.push({
      userName: finalOrder.userName,
      userEmail: finalOrder.userEmail,
      deliveryMethod: finalOrder.deliveryMethod,
      userAdress: finalOrder.userAdress,
      cartProductName: cartItems.name,
      cartProductsQuantity: cartItems.quantity,
      cartProductsPrice: cartItems.price,
      totalOrderPrice: state.totalPrice
    });
    // state.cart = [];
    state.totalPrice = 0;
  },
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
    state.totalPrice = 0;
  }
};

const actions = {
  createRecentOrdersList({ commit }, recentOrder) {
    commit('setRecentOrders', recentOrder);
    console.log(recentOrder);
  },
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
  getTotalCartPrice: (state) => {
    return state.totalPrice;
  },
  getOrdersHistory: (state) => {
    return state.ordersHistory;
  }
};

export default { namespaced: true, state, mutations, getters, actions };
