<template>
  <div>
    <b-jumbotron class="home-header">
      <template v-slot:header> <i class="fab fa-medium"></i> </template>

      <template v-slot:lead>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </template>

      <hr class="my-4" />

      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>

      <search-filters />
    </b-jumbotron>
  </div>
</template>

<script>
import SearchFilter from './common/SearchFilter.vue';

export default {
  components: { 'search-filters': SearchFilter }
};
</script>
