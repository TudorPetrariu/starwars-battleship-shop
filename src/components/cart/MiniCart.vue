<template>
  <div>
    <b-dropdown right variant="transparent" no-caret>
      <template v-slot:button-content>
        <b-badge
          variant="transparent"
          class="text-white d-flex flex-row-reverse justify-content-center align-items-center"
          >4 <b-icon icon="cart"></b-icon>
        </b-badge>
      </template>
      <div>
        <div v-for="cartItem in cartItems" :key="cartItem.name">
          <div class="d-flex justify-content-between mr-1">
            <b-dropdown-item
              :to="{
                name: 'StarShipDetailsPage',
                params: { id: cartItem.name }
              }"
            >
              {{ cartItem.name }} <br />
              <small> {{ cartItem.quantity }} x {{ cartItem.price }}</small>
            </b-dropdown-item>
            <div>
              <remove-item-from-cart :ship="cartItem" />
            </div>
          </div>
          <b-dropdown-divider></b-dropdown-divider>
        </div>

        <div class="d-flex justify-content-between">
          <div>
            <b-dropdown-item>Total {{ getTotalCartPrice }} </b-dropdown-item>
          </div>

          <b-button
            size="sm"
            variant="outline-dark"
            class="mr-1 text-white clear-cart"
            @click="clearCartItems"
          >
            <b-icon icon="trash-fill" class="de" aria-hidden="true"></b-icon>
            Clear Cart
          </b-button>
        </div>
        <b-dropdown-divider></b-dropdown-divider>

        <div class="d-flex justify-content-around mt-3">
          <proceed-to-checkout-button v-if="cartItems.length > 0" />
          <b-button
            size="sm"
            class="d-flex justify-content-center align-items-center col-6"
            :to="{ name: 'Cart' }"
            >Go to Cart</b-button
          >
        </div>
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

<style lang="scss" scoped>
.clear-cart {
  background-color: #1c3b4f;

  svg {
    color: #d49f4b;
  }
}
</style>
