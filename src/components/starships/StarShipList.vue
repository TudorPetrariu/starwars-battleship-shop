<template>
  <div id="starships">
    <app-nav />
    <b-container>
      <b-jumbotron
        ><h1>
          The Star Wars API is the world's first quantified and
          programmatically-formatted set of Star Wars data.
        </h1></b-jumbotron
      >
      <searched-starship />
      <b-row cols-lg="3">
        <starship-item
          v-for="pages in showNext10Items"
          :key="pages.model"
          :pages="pages"
          class="my-2"
        />
      </b-row>

      <!-- Pagination -->
      <div>
        <div class="my-4">
          <ul
            class="pagination pagination-md justify-content-center text-center"
          >
            <li :class="currentPage === 1 ? 'disabled' : ''" class="page-item">
              <a class="page-link" @click="prevPage">Previous</a>
            </li>
            <li class="page-link" style="background-color: inherit;">
              {{ currentPage }} of 4
            </li>
            <li
              :class="currentPage === lastPage ? 'disabled' : ''"
              class="page-item"
            >
              <a class="page-link" @click="nextPage">Next</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- End of Pagination -->
    </b-container>
  </div>
</template>

<script>
import StarShipItem from './StarShipItem.vue';
import NavBar from '../NavBar';
import SearchFilter from '../common/SearchFilter';
import SearchedStarShip from './SearchedStarShip';

export default {
  components: {
    'starship-item': StarShipItem,
    'app-nav': NavBar,
    'search-filter': SearchFilter,
    'searched-starship': SearchedStarShip
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      loading: false,
      lastPage: 4
    };
  },
  computed: {
    getBattleShip() {
      return this.$store.getters['battleships/getBattleShips'];
    },
    showNext10Items() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = start + this.perPage;
      this.loading = false;
      return this.getBattleShip.slice(start, end);
    }
  },
  methods: {
    prevPage() {
      this.loading = true;
      this.currentPage--;
    },
    nextPage() {
      this.$store.dispatch('battleships/getNextPage');
      this.loading = true;
      this.currentPage++;
    }
  }
};
</script>

<style></style>
