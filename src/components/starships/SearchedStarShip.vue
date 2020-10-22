<template>
  <b-container>
    <b-card no-body class="overflow-hidden search-ship-card">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            :src="require('../../assets/images/final-order-image.jpg')"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title="Horizontal Card">
            <b-card-text>
              We've taken all the rich contextual stuff from the universe and
              formatted into something easier to consume with software. Then we
              went and stuck an API on the front so you can access it all!
            </b-card-text>
            <search-filters />
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <!-- <b-row cols="12">
      <div class="d-flex justify-content-start align-items-center">
        <div class="col-6">
        </div>
        <div class="col-md-4">
          <h4 class="my-3 text-white">
            We've taken all the rich contextual stuff from the universe and
            formatted into something easier to consume with software. Then we
            went and stuck an API on the front so you can access it all!
          </h4>
        </div>
      </div>
    </b-row> -->
    <b-card v-for="ship in showResults" :key="ship.model" class="container">
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
  </b-container>
</template>

<script>
import SearchFilter from '../common/SearchFilter';

export default {
  components: { 'search-filters': SearchFilter },

  computed: {
    showResults() {
      return this.$store.getters['battleships/getSearchedBattleShip'];
    }
  }
};
</script>
