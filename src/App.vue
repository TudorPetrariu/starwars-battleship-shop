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
import { mapActions } from 'vuex'

import TheHeader from './common/components/TheHeader.vue'
import TheFooter from './common/components/TheFooter.vue'
import StarShipList from './common/components/starships/StarShipList'
import StarShipItem from './common/components/starships/StarShipItem'

export default {
  components: {
    'app-header': TheHeader,
    'app-footer': TheFooter,
    'starship-list': StarShipList,
    'starship-item': StarShipItem
  },
  methods: { ...mapActions('battleships', ['fetchBattleShips']) },

  created () {
    this.fetchBattleShips()
  }
}
</script>
