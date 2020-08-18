<template>
  <div>
    <div><h1>This is the orders history page</h1></div>
    <div v-for="(purchasedItem, i) in ordersHistory" :key="i" class="card">
      <div class="card-body">
        <span>{{ purchasedItem.cartProductName }}</span>
        <span>{{ purchasedItem.cartProductsPrice }}</span>
        <span>{{ purchasedItem.deliveryMethod }}</span>

        <span>{{ purchasedItem.userName }}</span>
        <span>{{ purchasedItem.userEmail }}</span>
        <span>{{ purchasedItem.userAdress }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    ordersHistory() {
      return this.$store.getters['cart/getOrdersHistory'];
      console.log(this.ordersHistory);
    }
  }
};
</script>

<style></style>
