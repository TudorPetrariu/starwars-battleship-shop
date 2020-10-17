<template>
  <b-jumbotron id="home-header" class="w-50">
    <template v-slot:header>Starwars BattleShips Temple</template>
    <template v-slot:lead>
      <h3 class="my-5">
        The world's first quantified and programmatically-accessible data source
        for all the data from the Star Wars canon universe!
      </h3>
    </template>
    <hr />

    <b-button
      pill
      size="sm"
      variant="outline-secondary"
      class="p-3 mt-4 search-redirector"
      @click="scrollToElement"
      >Looking for a starship ?</b-button
    >
  </b-jumbotron>
</template>

<script>
export default {
  methods: {
    scrollToElement() {
      const el = document.querySelector('.scroll-to');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }
};
</script>
