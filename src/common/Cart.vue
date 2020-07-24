<template>
  <div>
    <h3>This is the cart page</h3>

    <div v-for="cart in CartInfo">
      <span> Item: {{ cart.name }}</span>
      <span> Price: {{ cart.price }}</span>
      <details-page-button :ship="CartInfo"></details-page-button>
    </div>
  </div>
</template>

<script>
import DetailsPageButton from './DetailsPageButton.vue'

export default {
  components: {
    'details-page-button': DetailsPageButton
  },
  computed: {
    CartInfo () {
      return this.$store.getters['cart/getCart']
    }
  }
}
</script>

<style></style>
