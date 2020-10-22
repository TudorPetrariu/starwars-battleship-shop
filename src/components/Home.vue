<template>
  <div id="home-parralax">
    <app-nav />
    <div class="para-image-1">
      <div class="para-text">
        <span class="borders">Starwars BattleShips Shop</span>
      </div>
    </div>
    <section class="section section-light">
      <p>
        The world's first quantified and programmatically-accessible data source
        for all the data from the Star Wars canon battleships universe!
      </p>
    </section>
    <div class="para-image-2">
      <div class="para-text">
        <span class="borders trans"
          >All the Star Wars data you've ever wanted</span
        >
      </div>
    </div>
    <section class="section section-dark">
      <h2>The Star Wars API</h2>
      <p>
        We've taken all the battleships rich contextual stuff from the universe
        and formatted into something easier to consume.
      </p>
    </section>
    <div class="para-image-3">
      <div class="para-text">
        <span class="borders trans">Search & Beyond</span>
      </div>
    </div>
    <section class="section section-dark">
      <p>
        Search you favorite starship ( Star Destroyer, CR90 Corvette, WY-150,
        Fire-Fighter etc.), where you can also see in which movies they
        appeared.
      </p>
    </section>
    <div class="para-image-1">
      <div class="para-text">
        <span class="borders">Powered by Swapi Dev</span>
      </div>
    </div>
  </div>

  <!-- <div id="home-page">
    <app-header />
    <searched-starship />
  </div> -->
</template>

<script>
import NavBar from './NavBar.vue';
import TheHeader from './TheHeader.vue';
import SearchedStarShip from './starships/SearchedStarShip.vue';

export default {
  components: {
    'app-nav': NavBar,
    'app-header': TheHeader,
    'searched-starship': SearchedStarShip
  }
};
</script>
