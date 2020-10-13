<template>
  <div>
    <div v-if="$route.path === '/'" class="container-box">
      <div class="search-box scroll-to">
        <input
          v-model="searchTerm"
          placeholder="Search by name or model..."
          type="text"
          class="search-box-input"
          @change="fetchStarShip"
        />
        <svg
          class="search-box-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 56.966 56.966"
        >
          <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17s-17-7.626-17-17S14.61,6,23.984,6z"
          />
        </svg>
      </div>
    </div>
    <b-input-group v-if="$route.path === '/starships'" class="mb-5">
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

      <select
        v-if="$route.name !== 'Home'"
        v-model="selectedCategory"
        @change="filterCategories"
      >
        <option value="All" disabled selected>Filter by:</option>
        <option v-for="(category, index) in categories" :key="index">{{
          category
        }}</option>
      </select>
    </b-input-group>
  </div>
</template>

<script>
import { bus } from '../../main';
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
    }
  },
  methods: {
    fetchStarShip() {
      bus.$emit('search-value', this.searchTerm);

      // this.$store.dispatch(
      //   'battleships/fetchSearchedBattleship',
      //   this.searchTerm
      // );
    },
    filterCategories() {
      switch (this.selectedCategory) {
        case 'HyperDrive':
          return this.getAllBattleShips.sort(
            (a, b) => b.hyperdrive_rating - a.hyperdrive_rating
          );

          console.log('HyperDrive category selected');
          break;

        case 'Cargo Capacity':
          return this.getAllBattleShips.sort(
            (a, b) => b.cargo_capacity - a.cargo_capacity
          );
          console.log('Cargo Capacity category selected');
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
  }
};
</script>

<style></style>
