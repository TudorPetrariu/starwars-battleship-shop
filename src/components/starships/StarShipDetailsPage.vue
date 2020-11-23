<template>
  <div>
    <app-nav />
    <header
      class="details-page-header d-flex justify-content-center flex-column align-items-center"
    >
      <h1>Welcome to StarshipList Details Page</h1>
      <br />
      <p class="text-white">
        {{ getbattleShipInfo.name }} appeared in
        <b-badge class="text-warning" variant="dark"
          >{{ getbattleShipMovies.length }}
          {{ getbattleShipMovies.length !== 1 ? 'Movies' : 'Movie' }} </b-badge
        >, scroll down for more details
      </p>
    </header>
    <section class="ship-details">
      <div id="trigger-magic-scroll" class="ship-title">
        <div>
          <h3>
            {{ getbattleShipInfo.model }}
            <br />
            <b-badge class="text-warning" variant="dark"
              >{{ getbattleShipMovies.length }}
              {{ getbattleShipMovies.length !== 1 ? 'Movies' : 'Movie' }}
            </b-badge>
          </h3>
          <p class="text-dark">
            Manufacturer {{ getbattleShipInfo.manufacturer }}
          </p>
          <p class="text-dark">
            HyperDrive Speed {{ getbattleShipInfo.hyperdrive_rating }}
          </p>
          <p>
            Maximum Atmospheric Speed
            {{ getbattleShipInfo.max_atmospheric_speed }}
          </p>
        </div>
      </div>
      <div class="about-ship-pages">
        <div
          v-for="item in getbattleShipMovies"
          :key="item.name"
          class="ship-movie-page d-flex flex-column justify-content-center align-items-center"
          :class="{ 'h-100': getbattleShipMovies.length === 1 }"
        >
          <h2 class="mb-5">
            Episode {{ item.episode_id }}
            {{ item.title }}
            <small
              ><b-badge class="text-white">{{ item.release_date }}</b-badge>
            </small>
            <br />
            Producers
            <small class="text-white"> {{ item.producer }}</small>
            <br />
            Director
            <small class="text-white"> {{ item.director }}</small>
            <br />
          </h2>
          <p class="mt-5">
            <b-badge class="text-white">Opening crawl</b-badge>
            {{ item.opening_crawl }}
          </p>
        </div>
      </div>
    </section>
    <footer
      class="starship-details-page-footer d-flex justify-content-center align-items-center"
    >
      <h2>Swapi Dev</h2>
    </footer>
  </div>
</template>
<script>
import AddToCart from '../common/AddToCart.vue';
import NavBar from '../NavBar';
import ScrollMagic from 'scrollmagic';

export default {
  components: { 'add-to-cart-buttton': AddToCart, 'app-nav': NavBar },
  props: ['id'],
  data() {
    return {};
  },

  computed: {
    getbattleShipInfo() {
      return this.$store.getters['battleships/getBattleShipDetails'](this.id);
    },
    getbattleShipMovies() {
      return this.$store.getters['battleships/getbattleShipMovieDetails'];
    },
    getScrollDuration() {
      return this.$store.getters['battleships/getScrollDuration'];
    }
  },

  ///page not starting on top
  watch: {
    getbattleShipMovies: {
      handler(newVal) {
        if (newVal) {
          this.startMagicScroll();
        }
      },
      immediate: true
    }
  },
  methods: {
    startMagicScroll() {
      console.log(this.getbattleShipInfo);
      if (document.getElementsByClassName('ship-details').length > 0) {
        const controller = new ScrollMagic.Controller();
        new ScrollMagic.Scene({
          duration: `${this.getScrollDuration}`,
          triggerElement: '#trigger-magic-scroll',
          triggerHook: 0
        })
          .setPin('#trigger-magic-scroll')
          .addTo(controller);
      }
    }
  }
};
</script>

<style></style>
