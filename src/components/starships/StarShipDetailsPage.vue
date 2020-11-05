<template>
  <div>
    <app-nav />
    <header class="details-page-header">
      <h1>Welcome to StarshipList Details Page</h1>
    </header>
    <section class="ship-details">
      <div id="trigger-magic-scroll" class="ship-title">
        <h2>
          {{ getbattleShipInfo.model }}
          <b-badge class="text-danger" variant="primary" pill>{{
            getbattleShipMovies.length
          }}</b-badge>
        </h2>
      </div>
      <div class="about-ship-pages">
        <div
          v-for="item in getbattleShipMovies"
          :key="item.name"
          class="ship-movie-page"
        >
          <h2>
            Episode {{ item.episode_id }}
            <br />
            {{ item.title }}
            <br />

            <small>Year {{ item.release_date }}</small>
            <br />
            <small> Director {{ item.director }}</small>
            <br />
          </h2>

          <p><b-badge>Opening crawl</b-badge> {{ item.opening_crawl }}</p>
        </div>
      </div>
    </section>
    <footer class="starship-details-footer">
      <h2>Swapi Dev</h2>
    </footer>
  </div>
  <!-- <div>
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
                <b-badge
                  v-b-tooltip.html
                  style="cursor: pointer;"
                  title="<strong> A megalight, abbreviated MGLT, was a standard unit of distance in space.</strong>"
                  variant="primary"
                  pill
                  >{{ getbattleShipInfo.MGLT }} MGLT</b-badge
                >
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
            <br />
          </b-jumbotron>
        </div>
      </div>
    </b-container>
  </div> -->
</template>
<script>
import AddToCart from '../common/AddToCart.vue';
import NavBar from '../NavBar';
import ScrollMagic from 'scrollmagic';

export default {
  components: { 'add-to-cart-buttton': AddToCart, 'app-nav': NavBar },
  props: ['id'],
  data() {
    return {
      moviesLength: ''
    };
  },

  computed: {
    getbattleShipInfo() {
      return this.$store.getters['battleships/getBattleShipDetails'](this.id);
      console.log(this.moviesLength);
    },
    getbattleShipMovies() {
      return this.$store.getters['battleships/getbattleShipMovieDetails'];
    }
  },

  ///make page start on top
  // finish method function and store scroll percentage
  watch: {
    getbattleShipMovies: {
      handler(newVal) {
        if (newVal) {
          console.log(newVal.length);
          // check if userid is available
          // this.startMagicScroll();
        }
      },
      immediate: true // make this watch function is called when component created
    }
  },
  methods: {
    startMagicScroll() {
      const controller = new ScrollMagic.Controller();
      new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '#trigger-magic-scroll', //scroll distance for scene
        triggerHook: 0
      })
        .setPin('#trigger-magic-scroll') //pins the element for the scenes duration
        .addTo(controller);
    }
  }
};
</script>

<style></style>
