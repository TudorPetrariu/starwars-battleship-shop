<template>
  <div class="jumbotron bg-info">
    <h1>This is the details Page</h1>
    <div class="text-white">Details : {{ BattleShipDetails }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    BattleShipDetails () {
      return this.$store.getters['battleships/getBattleShipDetails']
    }
  }
}
</script>

<style></style>
