<template>
  <div>
    <ul v-if="CartInfo">
      <li>{{ CartInfo.shipId }}</li>
      <li>Price: {{ CartInfo.shipPrice }}</li>
      <li> Quantity {{ CartInfo.quantity }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    CartInfo () {
      return this.$store.getters['cart/getCart']
    }
  }
}
</script>

<style></style>
