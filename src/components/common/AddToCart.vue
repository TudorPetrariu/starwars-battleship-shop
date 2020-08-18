<template>
  <div>
    <div class="d-flex justify-content-around">
      <b-form-input v-model="quantity" class="col-3" size="sm" type="number" />
      <b-button
        size="sm"
        class="ml-1"
        :disabled="quantity < 0"
        variant="success"
        @click="addItemToCart"
      >
        Add to Cart
      </b-button>
    </div>
    <div></div>
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
