<template>
  <b-nav id="nav" pills small class="container">
    <b-navbar-brand to="/">StarShips</b-navbar-brand>
    <div class="ml-auto d-flex jutify-content-end">
      <b-nav-item
        class="text-white"
        active-class="active"
        exact
        :to="{ name: 'Home' }"
        >Home
      </b-nav-item>
      <b-nav-item active-class="active" :to="{ name: 'StarShipList' }">
        StarShips
      </b-nav-item>
  
    </div>
      <mini-cart />
  </b-nav>
</template>

<script>
import MiniCart from '../components/cart/MiniCart.vue'
export default {
  components: {
    'mini-cart': MiniCart
  }
}
</script>

<style></style>
