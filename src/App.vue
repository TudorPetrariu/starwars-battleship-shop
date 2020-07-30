<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import StarShipList from './components/starships/StarShipList.vue'
import StarShipDetailsPage from './components/starships/StarShipDetailsPage.vue'
import Home from  './components/Home.vue'

export default {
  components: {
    'starship-list': StarShipList,
    'starship-details': StarShipDetailsPage
  },
  created () {
    this.$store.dispatch('battleships/fetchBattleShips')
  }
}
</script>
<style>
</style>
