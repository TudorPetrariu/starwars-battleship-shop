import Home from './components/Home.vue';
import StarShipList from './components/starships/StarShipList.vue';
import StarShipDetailsPage from './components/starships/StarShipDetailsPage.vue';
import Cart from './components/cart/Cart.vue';
import Order from './components/order/Order.vue';
import OrderHistory from './components/order/OrderHistory.vue';

export const routes = [
  { path: '/', component: Home, name: 'Home' },
  {
    path: '/starships',
    component: StarShipList,
    name: 'StarShipList'
  },
  { path: '/cart', component: Cart, name: 'Cart' },
  {
    path: '/cart/confirm-order',
    component: Order,
    name: 'CreateOrder'
  },
  { path: 'history-order', component: OrderHistory, name: 'OrderHistory' },

  {
    path: '/starships/:id',
    component: StarShipDetailsPage,
    name: 'StarShipDetailsPage',
    props: true
  },

  { path: '*', redirect: '/' }
];
