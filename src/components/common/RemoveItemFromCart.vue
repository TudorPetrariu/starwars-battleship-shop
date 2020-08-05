<template>
  <div>
    <b-button @click="removeItem">Remove item</b-button>
  </div>
</template>

<script>
export default {
  props: ['ship'],
  data() {
    return {};
  },
  methods: {
    removeItem() {
      const order = {
        name: this.ship.name
      };
      this.$store.dispatch('cart/deleteItemFromCart', order);
    }
  }
};
</script>

<style></style>
