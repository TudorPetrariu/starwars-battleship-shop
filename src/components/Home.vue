<template>
  <div id="home">
    <app-header />
    <search-filters />
   <div class="text-white" v-for="item in sortedCategory">
      <span>{{ item.name }}</span>
      <span>{{ item.model }}</span>
      <span>{{item.cargo_capacity}}</span>
      <span></span>
    </div>
    <b-card class="container" v-for="ship in showResults" :key="ship.model">
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
import bus from '../main'

import SearchFilter from './common/SearchFilter.vue'
import Header from './TheHeader.vue'

export default {
  data () {
    return {
      sortedCategory: []
    }
  },
  components: {
    'search-filters': SearchFilter,
    'app-header': Header
  },
  computed: {
    showResults () {
      return this.$store.getters['battleships/getSearchedBattleShip']
    }
  },
  mounted () {
    this.$eventBus.$on('sortedItems', payload => {
      this.sortedCategory = payload
      console.log(payload)
      console.log(this.sortedCategory)
    })
  }
}
</script>
