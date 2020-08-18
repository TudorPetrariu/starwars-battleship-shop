<template>
  <b-container>
    <b-card-group deck class="d-flex justify-content-center">
      <b-card style="max-width: 350px;">
        <h5 small class="text-center">{{ pages.model }}</h5>
        <b-card-text class="d-flex justify-content-around">
          <div class="d-flex flex-column">
            <span>HyperDrive Rating </span>
            <span>Cargo Capacity </span>
            <span>Passenger capacity</span>
            <span>Ship Length</span>
            <span>Ship Price</span>
          </div>
          <div class="d-flex flex-column align-items-end">
            <span>{{ pages.cargo_capacity }}</span>
            <span> {{ pages.passengers }}</span>
            <span> {{ pages.length }}</span>
            <span> {{ pages.cost_in_credits }}</span>
          </div>
        </b-card-text>
        <div class="d-flex">
          <details-page-button class="col-5" :name="pages.name" />
          <add-to-cart :ship="pages" />
        </div>
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script>
import AddToCart from '../common/AddToCart.vue';
import DetailsPageButton from '../common/DetailsPageButton.vue';

export default {
  components: {
    'add-to-cart': AddToCart,
    'details-page-button': DetailsPageButton
  },
  props: ['pages']
};
</script>

<style>
.carrd {
  border: black 2px solid;
}
</style>
