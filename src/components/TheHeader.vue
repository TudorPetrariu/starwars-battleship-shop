<template>
  <b-nav id="nav" pills small class="container">
    <b-navbar-brand type="light" to="/">StarShips</b-navbar-brand>
    <div class="ml-auto d-flex jutify-content-end">
      <b-nav-item
        variant="outline-dark"
        active-class="active bg-warning"
        exact
        :to="{ name: 'Home' }"
        >Home
      </b-nav-item>
      <b-nav-item
        variant="transparent"
        active-class="active bg-warning"
        :to="{ name: 'StarShipList' }"
      >
        StarShips
      </b-nav-item>
      <mini-cart />
      <b-nav-item
        variant="transparent"
        active-class="active bg-warning"
        :to="{ name: 'OrderHistory' }"
      >
        Orders
      </b-nav-item>
    </div>
  </b-nav>
</template>

<script>
import MiniCart from '../components/cart/MiniCart.vue';
export default {
  components: {
    'mini-cart': MiniCart
  }
};
</script>

<style sass>
a {
  color: white;
}
</style>
