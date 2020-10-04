<template>
  <div>
    <app-nav />
    <b-container>
      <div
        header="Battleship Details page"
        fluid
        class="mr-5 mt-5 d-flex justify-content-center"
      >
        <div class="ship-details-card">
          <b-list-group flush>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center text-white"
            >
              Battleship
              <b-badge variant="primary" pill>{{
                getbattleShipInfo.name
              }}</b-badge>
            </b-list-group-item>

            <b-list-group-item
              class="d-flex justify-content-between align-items-center text-white"
            >
              Battleship Model
              <b-badge variant="primary" pill>{{
                getbattleShipInfo.model
              }}</b-badge>
            </b-list-group-item>

            <b-list-group-item
              class="d-flex justify-content-between align-items-center text-white"
            >
              Company
              <b-badge variant="primary" pill>{{
                getbattleShipInfo.manufacturer
              }}</b-badge>
            </b-list-group-item>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center text-white"
            >
              Megalight
              <v-b-tooltip>
                <b-badge
                  style="cursor: pointer;"
                  title="A megalight, abbreviated MGLT, was a standard unit of distance in space."
                  variant="primary"
                  pill
                  >{{ getbattleShipInfo.MGLT }} MGLT</b-badge
                >
              </v-b-tooltip>
            </b-list-group-item>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center text-white"
            >
              Starship Class
              <b-badge variant="primary" pill>
                {{ getbattleShipInfo.starship_class }}</b-badge
              >
            </b-list-group-item>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center text-white"
            >
              Crew Capacity
              <b-badge variant="primary" pill>
                {{ getbattleShipInfo.crew }}</b-badge
              >
            </b-list-group-item>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center text-white"
            >
              Passengers Capacity
              <b-badge variant="primary" pill>
                {{ getbattleShipInfo.passengers }}</b-badge
              >
            </b-list-group-item>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center text-white"
            >
              Cargo Capacity
              <b-badge variant="primary" pill>
                {{ getbattleShipInfo.cargo_capacity }}</b-badge
              >
            </b-list-group-item>

            <b-list-group-item
              class="d-flex justify-content-between align-items-center text-white"
            >
              Consumables consumption rate
              <b-badge variant="primary" pill>
                {{ getbattleShipInfo.consumables }}</b-badge
              >
            </b-list-group-item>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center text-white"
            >
              Length
              <b-badge variant="primary" pill>
                {{ getbattleShipInfo.length }}m</b-badge
              >
            </b-list-group-item>
          </b-list-group>
          <add-to-cart-buttton :ship="getbattleShipInfo" />
        </div>
      </div>
      <div class="bg-info p-5 mt-5">
        <h4 class="text-white text-center p-2">
          Movies where {{ getbattleShipInfo.name }} appeared
        </h4>
      </div>
      <div class="d-flex mt-5">
        <div v-for="item in getbattleShipMovies" :key="item.name">
          <b-jumbotron id="jmb-movie-details" class="rounded py-4">
            Episode {{ item.episode_id }} -
            <b-badge>{{ item.title }}</b-badge>
            <br />
            <small><b-badge>Year</b-badge>{{ item.release_date }}</small>
            <br />
            <small> <b-badge>Director</b-badge> {{ item.director }}</small>
            <br />
            <small>
              <b-badge>Opening crawl</b-badge> {{ item.opening_crawl }}</small
            >
            <br />
          </b-jumbotron>
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
import AddToCart from '../common/AddToCart.vue';
import NavBar from '../NavBar';

export default {
  components: { 'add-to-cart-buttton': AddToCart, 'app-nav': NavBar },
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
