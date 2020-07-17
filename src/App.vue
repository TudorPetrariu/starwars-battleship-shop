<template>
  <div>
    <app-header></app-header>
    <starship-list></starship-list>
    <app-footer />
  </div>
</template>

<script>
import TheHeader from './common/components/TheHeader.vue'
import TheFooter from './common/components/TheFooter.vue'
import StarShipList from './common/components/starships/StarShipList'

export default {
  components: {
    'app-header': TheHeader,
    'app-footer': TheFooter,
    'starship-list': StarShipList
  }
}
</script>
