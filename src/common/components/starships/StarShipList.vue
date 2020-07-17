<template>
  <div>
    <h1>Starships List</h1>
    <button @click="fetchBattleShips">Fetch StarWars Battleships</button>
    <ul v-for="ships in getBattleShips">
      <li>{{ ships }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      starWarsBattleships: {}
    }
  },
  methods: { ...mapActions(['fetchBattleShips']) },
  computed: { ...mapGetters(['getBattleShips']) }
}
</script>

<style></style>
