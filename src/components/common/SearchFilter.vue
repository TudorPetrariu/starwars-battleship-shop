<template>
  <div class="container mt-5">
    <b-input-group class="mb-5">
      <template v-slot:prepend>
        <b-input-group-text>StarShips</b-input-group-text>
      </template>
      <b-form-input
        v-model="searchTerm"
        type="text"
        placeholder="Search your favorite battleships ..."
        @change="fetchStarShip"
      >
      </b-form-input>

      <select v-if="$route.name !== 'Home'" v-model="selectedCategory">
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
  data() {
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
    };
  },
  computed: {
    getAllBattleShips() {
      return this.$store.getters['battleships/getBattleShips'];
    },
    filterCategories() {
      switch (this.selectedCategory) {
        case 'HyperDrive':
          this.getAllBattleShips.sort(
            (a, b) => b.hyperdrive_rating - a.hyperdrive_rating
          );

          console.log('HyperDrive category selected');
          break;

        case 'Cargo Capacity':
          return this.getAllBattleShips.sort(
            (a, b) => b.cargo_capacity - a.cargo_capacity
          );
          break;

        case 'Passengers':
          return this.getAllBattleShips.sort(
            (a, b) => b.passengers - a.passengers
          );
          console.log('Passengers category selected');
          break;

        case 'Costs':
          return this.getAllBattleShips.sort(
            (a, b) => parseInt(b.cost_in_credits) - parseInt(a.cost_in_credits)
          );
          console.log('Costs category selected');
          break;

        case 'Length':
          return this.getAllBattleShips.sort(
            (a, b) => parseInt(b.length) - parseInt(a.length)
          );
          console.log('Length category selected');
          break;
      }
    }
  },
  watch: {
    filterCategories: {
      handler(value) {
        this.$eventBus.$emit('sortedCategories', value);
        console.log(value);
      }
    }
  },
  methods: {
    fetchStarShip() {
      this.$store.dispatch(
        'battleships/fetchSearchedBattleship',
        this.searchTerm
      );
    }
  }
};
</script>

<style></style>
