<template>
  <div class="container mt-5">
    <b-input-group class="mb-5">
      <template v-slot:prepend>
        <b-input-group-text>StarShips</b-input-group-text>
      </template>
      <b-form-input
        @change="searchStarShip"
        type="text"
        v-model="searchTerm"
        placeholder="Search your favorite battleships ..."
      >
      </b-form-input>


      <select v-model="selectedCategory">
        <option value="All" disabled selected>Filter by:</option>
        <option v-for="(category, index,) in categories" :key="index">{{
          category
        }}</option>
      </select>
      <!-- <template v-slot:append>
        <b-dropdown
          v-for="(element, index) in getAllBattleShips"
          v-model="selectedCategory"
          text="Categories"
          variant="success"
        >
          <b-dropdown-item value="all" selected> All</b-dropdown-item>
          <b-dropdown-item :value="element.model">Cargo</b-dropdown-item>
          <b-dropdown-item :value="element.name">Passengers</b-dropdown-item>
          <b-dropdown-item>HyperdriveRating</b-dropdown-item>
        </b-dropdown>
      </template> -->
    </b-input-group>
    <div v-for="items in filterCategories" class="text-white "></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cat: [],
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
    searchStarShip () {
      this.$store.dispatch(
        'battleships/fetchSearchedBattleship',
        this.searchTerm
      )
    },
    emitSearch () {
      console.log(this.selectedCategory)
    }
  },
  computed: {
    getAllBattleShips () {
      return this.$store.getters['battleships/getBattleShips']
    },
    filterCategories () {
      switch (this.selectedCategory) {
        case 'HyperDrive':
          const rateHyperDrive = this.getAllBattleShips.filter(
            value => value.hyperdrive_rating
          )
          const ratedDrive = rateHyperDrive.sort(
            (a, b) => b.hyperdrive_rating - a.hyperdrive_rating
          )

          this.$eventBus.$emit('sortedItems', ratedDrive)

          break

        case 'Cargo Capacity':
          const ratedCargo = this.getAllBattleShips.filter(
            value => value.cargo_capacity
          )
          const rateCargo = ratedCargo.sort(
            (a, b) => b.cargo_capacity - a.cargo_capacity
          )
          this.cat = rateCargo
          this.$eventBus.$emit('sortedItems', rateCargo)

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
          filterCategories()
      }
    }
  }
}
</script>

<style></style>
