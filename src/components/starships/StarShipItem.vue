<template>
  <b-container>
    <b-card-group class="d-flex justify-content-center">
      <b-card
        class="col-lg-9 col"
        :title="pages.name"
        :sub-title="`${pages.cost_in_credits}  Credits`"
      >
        <div class="d-flex">
          <b-card-text>
            <div class="d-flex flex-column">
              <strong>Model: </strong>
              <span>HyperDrive Rating </span>
              <span>Cargo Capacity</span>
              <span>Passenger capacity :</span>
              <span>Ship Length: </span>
              <span>Ship Price: </span>
            </div>
          </b-card-text>
          <b-card-text>
            <div class="d-flex flex-column align-items-end">
              <strong> {{ pages.model }} </strong>

              <b-badge>{{ pages.cargo_capacity }}</b-badge>
              <span> {{ pages.passengers }}</span>
              <span> {{ pages.length }}</span>
              <span> {{ pages.cost_in_credits }}</span>
            </div>
          </b-card-text>
        </div>
        <div class="d-flex flex-column ml-auto">
          <add-to-cart :ship="pages" />
          <details-page-button :name="pages.name" />
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

<style></style>
