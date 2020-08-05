<template>
  <div class="row">
    <b-dropdown right variant="primary" no-caret>
      <template v-slot:button-content>
        <b-icon icon="cart" aria-hidden="true"></b-icon>
        <b-badge variant="light">4</b-badge>
      </template>

      <div class="mt-1 px-2">
        <div class="d-flex justify-content-between">
          <b-dropdown-item> Title </b-dropdown-item>
          <b-dropdown-item> 1 x 23$ </b-dropdown-item>
          <b-button size="sm" variant="danger" @click="removeItem">
            <b-icon icon="trash" aria-hidden="true"></b-icon>
            Remove
          </b-button>
        </div>
        <b-dropdown-divider></b-dropdown-divider>

        <div class="bg--danger d-flex justify-content-between">
          <b-dropdown-item>Total </b-dropdown-item>
          <b-dropdown-item> $30</b-dropdown-item>
          <b-button size="sm" variant="outline-dark" @click="removeItem">
            <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
            Clear Cart
          </b-button>
        </div>
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
export default {
  computed: {
    cartItems() {
      return this.$store.getters['cart/getCart'];
    }
  },
  methods: {
    removeItem() {
      console.log(this.$route.name);
    },
    clearCart() {
      console.log(this.$route.name);
    }
  }
};
</script>

<style></style>
