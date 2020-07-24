<template>
  <div>
    <b-button
      @click="setShipDetails"
      :to="{ name: 'StarShipDetailsPage', params: { id: ship.name } }"
      variant="outline-primary"
      >Visit Details</b-button
    >
  </div>
</template>

<script>
export default {
  props: ['ship'],
  methods: {
    setShipDetails () {
      const shipDetails = this.ship
      this.$store.commit('battleships/setShipDetails', shipDetails)
    }
  }
}
</script>

<style></style>
