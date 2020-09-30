<template>
  <b-container>
    <app-header />
    <b-jumbotron
      ><h1>The Star Wars battleships that you've ever wanted</h1></b-jumbotron
    >
    <search-filter />
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
        <ul class="pagination pagination-md justify-content-center text-center">
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
</template>

<script>
import StarShipItem from './StarShipItem.vue';
import TheHeader from '../TheHeader';
import SearchFilter from '../common/SearchFilter';

export default {
  components: {
    'starship-item': StarShipItem,
    'app-header': TheHeader,
    'search-filter': SearchFilter
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
