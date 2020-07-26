<template>
  <div>
    <h1>Starships getBattleShips</h1>
    <starship-item :ship="ship" v-for="ship in getBattleShips" :key="ship.name" ></starship-item>
  </div>
</template>

<script>
import AddToCart from '../../AddToCart.vue'
import StarShipItem from './StarShipItem.vue'

export default {
  components: {
    'add-to-cart': AddToCart,
    'starship-item': StarShipItem
  },
  computed: {
    getBattleShips () {
      return this.$store.getters['battleships/getBattleShips']
    }
  }
}
</script>

<style></style>
