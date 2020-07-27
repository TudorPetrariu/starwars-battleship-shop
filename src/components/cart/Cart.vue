<template>
  <div>
    <h3>This is the cart page</h3>
    <div v-for="item in cartItems">
      <span> Item: {{ item.name }}</span>
      <span> Price: {{ item.price }}</span>
      <span>Quantity: {{ item.quantity }}</span>
      <details-page-button :name="item.name"></details-page-button>
      <remove-item-button :ship="item"> </remove-item-button>
    </div>
  </div>
</template>

<script>
import DetailsPageButton from '../common/DetailsPageButton.vue'
import RemoveItemFromCart from '../common/RemoveItemFromCart.vue'

export default {
  components: {
    'details-page-button': DetailsPageButton,
    'remove-item-button': RemoveItemFromCart
  },
  computed: {
    cartItems () {
      return this.$store.getters['cart/getCart']
    }
  }
}
</script>

<style></style>
