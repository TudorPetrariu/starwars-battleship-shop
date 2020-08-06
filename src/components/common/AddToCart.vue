<template>
  <div>
    <input v-model="quantity" type="number" class="w-50" />
    <button :disabled="quantity <= 0" class="btn-succes" @click="addItemToCart">
      Add to Cart
    </button>
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
        quantity: this.quantity
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
