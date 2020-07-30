<template>
  <div class="container mt-5">
    <b-input-group class="mb-5">
      <template v-slot:prepend>
        <b-input-group-text>StarShips</b-input-group-text>
      </template>
      <b-form-input
        @change="searchStarShip"
        type="text"
        v-model="search"
        placeholder="Search your favorite battleships ..."
      ></b-form-input>

      <template v-slot:append>
        <b-dropdown text="Categories" variant="success">
          <b-dropdown-item>Action A</b-dropdown-item>
          <b-dropdown-item>Action B</b-dropdown-item>
        </b-dropdown>
      </template>
    </b-input-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  methods: {
    searchStarShip () {
      this.$store.dispatch('battleships/fetchSearchedBattleship', this.search)
    }
  }
}
</script>

<style></style>
