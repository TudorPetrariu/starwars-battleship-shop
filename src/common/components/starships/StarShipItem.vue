<template>
  <div>
    <div> {{ship.name}}</div>
    <p> Model: {{ship.model}}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props:['ship'],
  data () {
    return {
    }
  },
  methods: { ...mapActions('battleships', ['fetchBattleShips']) },
  computed: { ...mapGetters('battleships', ['getBattleShips']) }
}
</script>

<style></style>
