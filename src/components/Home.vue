<template>
  <div id="home">
    <app-nav />
    <app-header />
    <searched-starship />
  </div>
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
