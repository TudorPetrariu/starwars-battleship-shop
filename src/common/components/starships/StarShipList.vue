<template>
  <div>
    <b-input class="no-border" size="sm"></b-input>
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
  methods: { ...mapActions('battleships',['fetchBattleShips']) },
  computed: { ...mapGetters('battleships',['getBattleShips']) }
}
</script>

<style></style>
