<template>
  <b-button
    class="details-page-btn"
    size="sm"
    :to="{ name: 'StarShipDetailsPage', params: { id: name } }"
    @click="fetchMoreBattleshipDetails"
  >
    Ship Details
  </b-button>
</template>

<script>
export default {
  props: ['name'],
  methods: {
    fetchMoreBattleshipDetails() {
      this.$store.dispatch('battleships/fetchBattleshipDetails');
    }
  }
};
</script>

<style></style>
