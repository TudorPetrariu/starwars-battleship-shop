<template>
  <b-container>
    <b-card-group deck>
      <b-card overlay class="mt-5" style="min-height: 500px;">
        <h5 class="text-center text-muted">
          <strong>
            <em>{{ pages.model }}</em>
          </strong>
        </h5>
        <b-list-group flush class="d-flex mb-5">
          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            <b-badge variant="warning" class="text-warning text-dark" pill>
              HyperDrive Rating
            </b-badge>
            <b-badge variant="dark" class="w-50 text-warning" pill>{{
              pages.hyperdrive_rating
            }}</b-badge>
          </b-list-group-item>

          <b-list-group-item
            class="d-flex justify-content-between mt-4 align-items-center"
          >
            <b-badge variant="warning" class="text-warning text-dark" pill>
              Cargo Capacity
            </b-badge>
            <b-badge variant="dark" class="w-50 text-warning" pill>{{
              pages.cargo_capacity
            }}</b-badge>
          </b-list-group-item>

          <b-list-group-item
            class="d-flex justify-content-between mt-4 align-items-center"
          >
            <b-badge variant="warning" class="text-warning text-dark" pill>
              Passenger Capacity
            </b-badge>
            <b-badge variant="dark" class="w-50 text-warning" pill>{{
              pages.passengers
            }}</b-badge>
          </b-list-group-item>
          <b-list-group-item
            class="d-flex justify-content-between mt-4 align-items-center"
          >
            <b-badge variant="warning" class="text-warning text-dark" pill>
              Ship Length
            </b-badge>
            <b-badge variant="dark" class="w-50 text-warning" pill>{{
              pages.length
            }}</b-badge>
          </b-list-group-item>
          <b-list-group-item
            class="d-flex justify-content-between mt-4 align-items-center"
          >
            <b-badge variant="warning" class="text-warning text-dark" pill>
              Ship Price
            </b-badge>
            <b-badge variant="dark" class="w-50 text-warning" pill>{{
              pages.cost_in_credits
            }}</b-badge>
          </b-list-group-item>
        </b-list-group>
        <b-card-footer class="d-flex p-2">
          <details-page-button class="col-lg-4 mr-1" :name="pages.name" />
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

<style>
.card {
  background-color: #08192b;
  opacity: 80%;
}
.list-group {
  margin-top: 3em;
}
.list-group-item {
  background-color: transparent;
  border-bottom-color: rgb(0, 0, 0);
}
</style>
