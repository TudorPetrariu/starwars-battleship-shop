<template>
  <div>
    <div v-for="(purchasedShip, i) in ordersHistory" :key="i">
      <pre>{{ purchasedShip.credits }}</pre>
      <pre>{{ purchasedShip.credits }}</pre>
      <pre>{{ purchasedShip.credits }}</pre>

      <pre>{{ purchasedShip.credits }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    ordersHistory() {
      return this.$store.getters('cart/getOrdersHistory');
    }
  }
};
</script>

<style></style>
