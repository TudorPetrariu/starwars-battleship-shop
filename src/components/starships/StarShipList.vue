<template>
  <div>
    <h1>Starships getBattleShips</h1>
    <starship-item v-for="pages in showNext10Items" :pages="pages" />
    <!-- Pagination -->
    <div >
      <div class="my-4">
        <ul class="pagination pagination-md justify-content-center text-center">
          <li :class="currentPage === 1 ? 'disabled' : ''" class="page-item">
            <a class="page-link" @click="prevPage">Previous</a>
          </li>
          <li class="page-link" style="background-color: inherit">
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
  </div>
</template>

<script>
import AddToCart from '../common/AddToCart.vue'
import StarShipItem from './StarShipItem.vue'
export default {
  data () {
    return {
      perPage: 10,
      currentPage: 1,
      loading: false,
      lastPage: 4
    }
  },
  components: {
    'add-to-cart': AddToCart,
    'starship-item': StarShipItem
  },
  computed: {
    getBattleShip () {
      return this.$store.getters['battleships/getBattleShips']
    },
    showNext10Items () {
      let start = (this.currentPage - 1) * this.perPage
      let end = start + this.perPage
      this.loading = false
      return this.getBattleShip.slice(start, end)
    }
  },
  methods: {
    prevPage () {
      this.loading = true
      this.currentPage--
    },
    nextPage () {
      this.$store.dispatch('battleships/getNextPage')
      this.loading = true
      this.currentPage++
    }
  }
}
</script>

<style></style>
