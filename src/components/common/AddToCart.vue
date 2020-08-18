<template>
  <div class="d-flex mb-3">
    <b-form-input v-model="quantity" size="sm" class="mr-2" type="number" />

    <b-button
      class="w-75"
      size="sm"
      :disabled="quantity < 0"
      variant="success"
      @click="addItemToCart"
    >
      Add to Cart
    </b-button>
  </div>
</template>

<script>
export default {
  props: ['ship'],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    addItemToCart() {
      const order = {
        name: this.ship.name,
        price: this.ship.cost_in_credits,
        quantity: this.quantity || 1
      };
      this.$store.commit('cart/setItemToCart', order);
      this.quantity = 0;
      this.$bvToast.toast(`You have added ${this.ship.name} to cart`, {
        title: 'Congrats !!',
        variant: 'success',
        toaster: 'b-toaster-bottom-right',
        autoHideDelay: 700
      });
    }
  }
};
</script>

<style></style>
