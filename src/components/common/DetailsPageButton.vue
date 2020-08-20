<template>
  <b-button
    variant="warning"
    size="sm"
    :to="{ name: 'StarShipDetailsPage', params: { id: name } }"
  >
    Ship Details
  </b-button>
</template>

<script>
export default {
  props: ['name']
};
</script>

<style></style>
