<template>
  <div class="jumbotron bg-info">
    <h1>Battleship Details page</h1>
    <div v-for="item in battleShipInfo">{{ item }}</div>
    <add-to-cart-buttton :ship="battleShipInfo"></add-to-cart-buttton>
  </div>
</template>
<script>
import AddToCart from '../../AddToCart.vue'
export default {
  components: { 'add-to-cart-buttton': AddToCart },
  props: ['id'],
  data () {
    return {}
  },
  computed: {
    battleShipInfo () {
      return this.$store.getters['battleships/getBattleShipDetails'](this.id)
    }
  }
}
</script>

<style></style>
