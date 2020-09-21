const state = {
  cart: [],
  totalCartPrice: 0,
  totalCartQuantity: 0,
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
      totalOrderPrice: state.totalCartPrice
    });
    state.cart = [];
    state.totalCartPrice = 0;
    state.totalCartQuantity = 0;
    console.log(state.ordersHistory);
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
    state.totalCartPrice =
      state.totalCartPrice + Number(quantity) * Number(price);
    state.totalCartQuantity = quantity += state.totalCartQuantity;
  },
  removeItemFromCart(state, { name }) {
    const record = state.cart.find((element) => element.name === name);
    state.cart.splice(state.cart.indexOf(record), 1);

    state.totalCartPrice =
      state.totalCartPrice - Number(record.quantity) * Number(record.price);
    state.totalCartQuantity = state.totalCartQuantity - record.quantity;
  },
  clearCartItems(state) {
    state.cart = [];
    state.totalCartPrice = 0;
    state.totalCartQuantity = 0;
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
    return state.totalCartPrice;
  },
  getTotalCartQuantity: (state) => {
    return state.totalCartQuantity;
  },
  getOrdersHistory: (state) => {
    return state.ordersHistory;
  }
};

export default { namespaced: true, state, mutations, getters, actions };
