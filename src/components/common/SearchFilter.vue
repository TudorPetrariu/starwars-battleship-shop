<template>
  <div class="container mt-5">
    <b-input-group class="mb-5">
      <template v-slot:prepend>
        <b-input-group-text>StarShips</b-input-group-text>
      </template>
      <b-form-input
        @change="fetchStarShip"
        type="text"
        v-model="searchTerm"
        placeholder="Search your favorite battleships ..."
      >
      </b-form-input>

      <select v-model="selectedCategory">
        <option value="All" disabled selected>Filter by:</option>
        <option v-for="(category, index) in categories" :key="index">{{
          category
        }}</option>
      </select>
    </b-input-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchTerm: '',
      selectedCategory: 'All',
      categories: [
        'HyperDrive',
        'Cargo Capacity',
        'Passengers',
        'Length',
        'Costs'
      ]
    }
  },
  methods: {
    fetchStarShip () {
      this.$store.dispatch(
        'battleships/fetchSearchedBattleship',
        this.searchTerm
      )
    }
  },
  computed: {
    getAllBattleShips () {
      return this.$store.getters['battleships/getBattleShips']
    },
    filterCategories () {
      switch (this.selectedCategory) {
        case 'HyperDrive':
          return this.getAllBattleShips.sort(
            (a, b) => b.hyperdrive_rating - a.hyperdrive_rating
          )
          console.log('HyperDrive category selected')
          break

        case 'Cargo Capacity':
          return this.getAllBattleShips.sort(
            (a, b) => b.cargo_capacity - a.cargo_capacity
          )
          console.log('Cargo Capacity category selected')
          break

        case 'Passengers':
          console.log('Passengers category selected')
          break

        case 'Costs':
          console.log('Costs category selected')
          break

        case 'Length':
          console.log('Length category selected')
          break
      }
    }
  },
  watch: {
    filterCategories: {
      handler (value) {
        this.$eventBus.$emit('sortedCategories', value)
      },
      immediate: true
    }
  }
}
</script>

<style></style>
