<template>
  <div>
    <b-button
      @click="checkShipDetails"
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
    checkShipDetails () {
      const shipDetails = this.ship
      this.$store.commit('battleships/setShipDetails', shipDetails)
    }
  }
}
</script>

<style></style>
