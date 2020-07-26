<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-12">
        <router-view></router-view>
      </div>
    </div>
    <app-footer />
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
