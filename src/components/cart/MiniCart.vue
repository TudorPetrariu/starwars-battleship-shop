<template>
  <div>
    <b-dropdown right variant="primary" no-caret>
      <template v-slot:button-content>
        <b-icon icon="cart"></b-icon>
        <b-badge variant="light">4</b-badge>
      </template>

      <div v-for="cartItem in cartItems" :key="cartItem.name">
        <div class="d-flex justify-content-between">
          <b-dropdown-item>
            {{ cartItem.name }} <br />
            {{ cartItem.quantity }} x {{ cartItem.price }}
          </b-dropdown-item>
          <remove-item-from-cart :ship="cartItem" />
        </div>
      </div>

      <div class="bg--danger d-flex justify-content-between">
        <div>
          <b-dropdown-item>Total {{ getTotalCartPrice }} </b-dropdown-item>
        </div>

        <b-button size="sm" variant="outline-dark" @click="clearCartItems">
          <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
          Clear Cart
        </b-button>
      </div>
      <div>
        <b-button
          class="d-flex justify-content-center align-items-center"
          :to="{ name: 'Cart' }"
          >Go to Cart</b-button
        >
        <proceed-to-checkout-button v-if="cartItems.length > 0" />
      </div>
    </b-dropdown>
  </div>
</template>

<script>
import removeItemFromCart from '../common/RemoveItemFromCart.vue';
import ProceedToCheckoutButton from '../common/ProceedToCheckoutButton.vue';
export default {
  components: {
    'remove-item-from-cart': removeItemFromCart,
    'proceed-to-checkout-button': ProceedToCheckoutButton
  },
  computed: {
    cartItems() {
      return this.$store.getters['cart/getCart'];
    },
    getTotalCartPrice() {
      return this.$store.getters['cart/getTotalCartPrice'];
    }
  },
  methods: {
    clearCartItems() {
      this.$store.dispatch('cart/clearCart');
      console.log('cart cleared');
      this.$bvToast.toast('Cart has been cleared', {
        title: 'All set !',
        variant: 'danger',
        toaster: 'b-toaster-bottom-right',
        appendToast: true,
        autoHideDelay: 500
      });
    }
  }
};
</script>

<style></style>
