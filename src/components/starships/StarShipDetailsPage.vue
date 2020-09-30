<template>
  <div>
    <app-header />
    <b-container class="d-flex justify-content-center align-items-center">
      <b-jumbotron fluid class="mr-5 mt-5">
        <h1>Battleship Details page</h1>
        <div>
          {{ getbattleShipInfo.name }}
        </div>
      </b-jumbotron>
      <div>
        <b-jumbotron
          ><div v-for="item in getbattleShipMovies" :key="item.name">
            {{ item.title }}
          </div>
        </b-jumbotron>
        <b-jumbotron>
          <add-to-cart-buttton :ship="getbattleShipInfo"></add-to-cart-buttton>
        </b-jumbotron>
      </div>
    </b-container>
  </div>
</template>
<script>
import AddToCart from '../common/AddToCart.vue';
import TheHeader from '../TheHeader';

export default {
  components: { 'add-to-cart-buttton': AddToCart, 'app-header': TheHeader },
  props: ['id'],
  computed: {
    getbattleShipInfo() {
      return this.$store.getters['battleships/getBattleShipDetails'](this.id);
    },
    getbattleShipMovies() {
      return this.$store.getters['battleships/getbattleShipMovieDetails'];
      console.log(this.getbattleShipInfo);
    }
  }
};
</script>

<style></style>
