<template>
  <div>
    <div class="jumbotron text-center">
      <span>Home Page</span>
    </div>

    <search-filters />

    <b-card v-for="ship in showResults" :key="ship.model">
      <template v-slot:header>
        <h4 class="mb-0 text-center">{{ ship.name }}</h4>
      </template>

      <b-card-body>
        <b-card-title>Model {{ ship.model }}</b-card-title>
        <b-card-sub-title class="mb-2"
          >Length: {{ ship.length }}</b-card-sub-title
        >
        <b-card-text> Cargo :{{ ship.cargo_capacity }} </b-card-text>
      </b-card-body>

      <span class="badge badge-pill badge-primary">
        {{ ship.manufacturer }}
      </span>

      <b-list-group flush>
        <b-list-group-item>Class : {{ ship.starship_class }}</b-list-group-item>

        <b-list-group-item>
          Max Speed : {{ ship.max_atmosphering_speed }}
        </b-list-group-item>
        <b-list-group-item>
          HyperDrive Rating : {{ ship.hyperdrive_rating }}
        </b-list-group-item>
      </b-list-group>

      <b-card-body>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import SearchFilter from './common/SearchFilter.vue'
export default {
  components: {
    'search-filters': SearchFilter
  },
  computed: {
    showResults () {
      return this.$store.getters['battleships/getSearchedBattleShip']
    }
  }
}
</script>

<style lang="scss"></style>
