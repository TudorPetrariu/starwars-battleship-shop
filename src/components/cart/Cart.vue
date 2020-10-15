<template>
  <div>
    <app-nav />
    <h3>This is the cart page</h3>
    <proceed-to-checkout-button />
    <b-button :to="{ name: 'StarShipList' }">Back to StarShips</b-button>
    <div v-for="item in cartItems" :key="item.name">
      <span> Item: {{ item.name }}</span>
      <span> Price: {{ item.price }}</span>
      <span>Quantity: {{ item.quantity }}</span>
      <details-page-button :name="item.name"></details-page-button>
      <remove-item-button :ship="item"> </remove-item-button>
    </div>
  </div>
</template>

<script>
import DetailsPageButton from '../common/DetailsPageButton.vue';
import RemoveItemFromCart from '../common/RemoveItemFromCart.vue';
import NavBar from '../NavBar.vue';
import ProceedToCheckoutButton from '../common/ProceedToCheckoutButton.vue';
export default {
  components: {
    'details-page-button': DetailsPageButton,
    'remove-item-button': RemoveItemFromCart,
    'app-nav': NavBar,
    'proceed-to-checkout-button': ProceedToCheckoutButton
  },
  computed: {
    cartItems() {
      return this.$store.getters['cart/getCart'];
    }
  }
};
</script>
