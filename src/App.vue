<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <app-header></app-header>
        <router-view></router-view>
        <app-footer />
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from './common/components/TheHeader.vue'
import TheFooter from './common/components/TheFooter.vue'
import StarShipList from './common/components/starships/StarShipList'
import StarShipDetailsPage from './common/components/starships/StarShipDetailsPage'

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
