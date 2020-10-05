<template>
  <div>
    <b-jumbotron class="home-header">
      <template v-slot:header> <i class="fab fa-medium"></i> </template>

      <template v-slot:lead>
        The world's first quantified and programmatically-accessible data source
        for all the data from the Star Wars canon universe!
      </template>
      <hr class="my-4" />
      <p>
        We've taken all the rich contextual stuff from the universe and
        formatted into something easier to consume with software. Then we went
        and stuck an API on the front so you can access it all!
      </p>
      <b-button @click="scrollToElement"
        >Look into the stars for a StarShip</b-button
      >
      <b-button to="/starships">Explore all</b-button>
    </b-jumbotron>
  </div>
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
