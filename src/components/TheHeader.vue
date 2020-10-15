<template>
  <b-container>
    <b-jumbotron id="home-header" class="text-center p-5">
      <template v-slot:header>Starwars BattleShips Temple</template>

      <template v-slot:lead>
        <h3 class="my-5">
          The world's first quantified and programmatically-accessible data
          source for all the data from the Star Wars canon universe!
        </h3>
      </template>
      <hr />
      <h4 class="my-3">
        We've taken all the rich contextual stuff from the universe and
        formatted into something easier to consume with software. Then we went
        and stuck an API on the front so you can access it all!
      </h4>
      <b-button
        pill
        size="sm"
        variant="outline-secondary"
        class="p-3 mt-4 search-redirector"
        @click="scrollToElement"
        >Looking for a starship ?</b-button
      >
    </b-jumbotron>
  </b-container>
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
