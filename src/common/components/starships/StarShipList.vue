<template>
  <div>
    <h1>Starships getBattleShips</h1>
    <div class="card" v-for="ship in getBattleShips" :key="ship.name">
      <li>{{ ship.name }}</li>
      <!-- <router-link
        :to="{ name: 'StarShipDetailsPage', params: { id: ship.name } }"
      >
        <p>{{ ship.model }}</p>
      </router-link> -->
      <div>
        <add-to-cart :ship="ship"></add-to-cart>
        <details-page-button :ship="ship"></details-page-button>
      </div>
    </div>
  </div>
</template>

<script>
import AddToCart from '../../AddToCart.vue'
import DetailsPageButton from '../../DetailsPageButton.vue'

export default {
  components: {
    'add-to-cart': AddToCart,
    'details-page-button': DetailsPageButton
  },
  computed: {
    getBattleShips () {
      return this.$store.getters['battleships/getBattleShips']
    }
  }
}
</script>

<style></style>
