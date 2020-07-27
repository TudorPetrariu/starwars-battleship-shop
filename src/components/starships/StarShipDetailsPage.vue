<template>
  <div class="jumbotron bg-info">
    <h1>Battleship Details page</h1>
    <div v-for="item in getbattleShipInfo">{{ item }}</div>
    <add-to-cart-buttton :ship="getbattleShipInfo"></add-to-cart-buttton>
  </div>
</template>
<script>
import AddToCart from '../common/AddToCart.vue'
export default {
  components: { 'add-to-cart-buttton': AddToCart },
  props: ['id'],
  computed: {
    getbattleShipInfo () {
      return this.$store.getters['battleships/getBattleShipDetails'](this.id)
    }
  }
}
</script>

<style></style>
