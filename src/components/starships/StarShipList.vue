<template>
  <div id="starships">
    <app-nav />
    <div>
      <b-jumbotron
        class="d-flex flex-column justify-content-center align-items-center"
        ><h1 class="p-5">
          The Star Wars API is the world's first quantified and
          programmatically-formatted set of Star Wars data.
        </h1>
      </b-jumbotron>

      <b-container>
        <searched-starship id="starships-search-bar" />
        <b-row cols-lg="3">
          <starship-item
            v-for="pages in filterBattleShips"
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
              <li
                :class="currentPage === 1 ? 'disabled' : ''"
                class="page-item"
              >
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
  </div>
</template>

<script>
import StarShipItem from './StarShipItem.vue';
import NavBar from '../NavBar';
import SearchedStarShip from './SearchedStarShip';
import { bus } from '../../main';

export default {
  components: {
    'starship-item': StarShipItem,
    'app-nav': NavBar,
    'searched-starship': SearchedStarShip
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      loading: false,
      lastPage: 4,
      searchValue: ''
    };
  },
  computed: {
    getBattleShip() {
      return this.$store.getters['battleships/getBattleShips'];
    },
    filterBattleShips() {
      return this.getBattleShip.filter((product) => {
        return product.model
          .toLowerCase()
          .includes(this.searchValue.toLowerCase());
      });
    }
    // showNext10Items() {
    //   let start = (this.currentPage - 1) * this.perPage;
    //   let end = start + this.perPage;
    //   this.loading = false;
    //   return this.getBattleShip.slice(start, end);
    // }
  },
  created() {
    bus.$on('search-value', (search) => {
      this.searchValue = search;
      console.log(this.searchValue);
    });
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
