<template>
  <b-container>
    <b-card-group deck>
      <b-card overlay class="mt-5" style="min-height: 400px;">
        <h5 class="text-center text-white">
          <strong>
            <em>{{ pages.model }}</em>
          </strong>
        </h5>
        <b-list-group flush class="d-flex mb-4">
          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            <b-badge class="w-50" pill>
              HyperDrive Rating
            </b-badge>
            <b-badge class="w-50" pill>{{ pages.hyperdrive_rating }}</b-badge>
          </b-list-group-item>

          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            <b-badge class="w-50" pill>
              Cargo Capacity
            </b-badge>
            <b-badge class="w-50" pill>{{ pages.cargo_capacity }}</b-badge>
          </b-list-group-item>

          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            <b-badge class="w-50" pill>
              Passenger Capacity
            </b-badge>
            <b-badge class="w-50" pill>{{ pages.passengers }}</b-badge>
          </b-list-group-item>
          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            <b-badge class="w-50" pill>
              Ship Length
            </b-badge>
            <b-badge class="w-50" pill>{{ pages.length }}</b-badge>
          </b-list-group-item>
          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            <b-badge class="w-50" pill>
              Ship Price
            </b-badge>
            <b-badge class="w-50" pill>{{ pages.cost_in_credits }}</b-badge>
          </b-list-group-item>
        </b-list-group>
        <b-card-footer class="d-flex p-2">
          <details-page-button class="col-lg-6 mr-1" :name="pages.name" />
          <add-to-cart :ship="pages" />
        </b-card-footer>
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
