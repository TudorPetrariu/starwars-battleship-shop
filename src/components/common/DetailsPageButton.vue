<template>
  <div>
    <b-button :to="{ name: 'StarShipDetailsPage', params: { id: name } }">
      Ship Details
    </b-button>
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style></style>
