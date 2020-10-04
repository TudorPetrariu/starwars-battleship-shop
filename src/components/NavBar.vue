<template>
  <b-navbar id="nav" sticky small>
    <b-navbar-brand type="light" to="/">StarShips</b-navbar-brand>
    <div class="ml-auto d-flex align-items-center">
      <b-nav-item exact :to="{ name: 'Home' }">Home </b-nav-item>
      <b-nav-item :to="{ name: 'StarShipList' }">
        StarShips
      </b-nav-item>
      <mini-cart />
      <b-nav-item v-if="ordersHistory.length" :to="{ name: 'OrderHistory' }">
        Orders
      </b-nav-item>
    </div>
  </b-navbar>
</template>

<script>
import MiniCart from '../components/cart/MiniCart.vue';
export default {
  components: {
    'mini-cart': MiniCart
  },
  computed: {
    ordersHistory() {
      return this.$store.getters['cart/getOrdersHistory'];
    }
  }
};
</script>
