<template>
  <div class="row">
    <b-dropdown right variant="primary" no-caret>
      <template v-slot:button-content>
        <b-icon icon="cart" aria-hidden="true"></b-icon>
        <b-badge variant="light">4</b-badge>
      </template>

      <div v-for="cartItem in cartItems" :key="cartItem.name" class="mt-1 px-2">
        <div class="d-flex justify-content-between">
          <b-dropdown-item> {{ cartItem.name }} </b-dropdown-item>
          <b-dropdown-item>
            {{ cartItem.quantity }} x {{ cartItem.price }}
          </b-dropdown-item>
          <remove-item-from-cart :ship="cartItem" />
          <!-- <b-button size="sm" variant="danger" @click="removeItem">
            Remove
          </b-button> -->
        </div>
      </div>

      <b-dropdown-divider></b-dropdown-divider>

      <div
        v-if="cartItems.length"
        class="bg--danger d-flex justify-content-between"
      >
        <b-dropdown-item>Total </b-dropdown-item>
        <b-dropdown-item> {{ getTotalCartPrice }}</b-dropdown-item>
        <b-button size="sm" variant="outline-dark">
          <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
          Clear Cart
        </b-button>
      </div>
      <div class="px-3">
        <b-button
          class="mt-2 d-flex justify-content-center align-items-center"
          :to="{ name: 'Cart' }"
          >Go to Cart</b-button
        >
      </div>
    </b-dropdown>
  </div>
</template>

<script>
import removeItemFromCart from '../common/RemoveItemFromCart.vue';
export default {
  components: {
    'remove-item-from-cart': removeItemFromCart
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
    clearCart() {
      console.log(this.$route.name);
    }
  }
};
</script>

<style></style>
