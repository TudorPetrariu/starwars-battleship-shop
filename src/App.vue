<template>
  <div>
    <app-header />
    <router-view></router-view>
    <app-footer />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import StarShipList from './components/starships/StarShipList.vue'
import StarShipDetailsPage from './components/starships/StarShipDetailsPage.vue'

export default {
  components: {
    'app-header': TheHeader,
    'app-footer': TheFooter,
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
