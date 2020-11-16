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
      if (document.getElementsByClassName('ship-details').length > 0) {
        const controller = new ScrollMagic.Controller();
        new ScrollMagic.Scene({
          duration: `${this.getScrollDuration}`,
          triggerElement: '#trigger-magic-scroll', //scroll distance for scene
          triggerHook: 0
        })
          .setPin('#trigger-magic-scroll') //pins the element for the scenes duration
          .addTo(controller);
      }
    }
  }
};
</script>

<style></style>
