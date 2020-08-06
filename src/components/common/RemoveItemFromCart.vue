<template>
  <div @click="makeToast">
    <b-button class="bg-dark" @click="removeItem">
      <b-badge variant="warning">Remove</b-badge>
    </b-button>
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
    },
    makeToast(e) {
      e.stopPropagation();
      this.$bvToast.toast(`Item ${this.ship.name} has been removed from cart`, {
        title: ` Succesfully removed from cart`,
        variant: 'info',
        appendToast: true,
        toaster: 'b-toaster-bottom-right',
        autoHideDelay: 700
      });
    }
  }
};
</script>

<style></style>
