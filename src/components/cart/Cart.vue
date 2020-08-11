<template>
  <div>
    <app-header />
    <h3>This is the cart page</h3>

    <div v-if="!cartItems.length" class="mt-5">
      <img
        src="../../assets/images/empty-cart.png"
        alt=""
        class="rounded-circle"
      />
    </div>
    <b-button
      :class="{ disabled: cartItems.length === 0 }"
      :to="{ name: 'CreateOrder' }"
      >Proceed to Checkout</b-button
    >
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
import TheHeader from '../TheHeader.vue';
export default {
  components: {
    'details-page-button': DetailsPageButton,
    'remove-item-button': RemoveItemFromCart,
    'app-header': TheHeader
  },
  computed: {
    cartItems() {
      return this.$store.getters['cart/getCart'];
    }
  }
};
</script>

<style scoped></style>
