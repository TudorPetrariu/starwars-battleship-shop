<template>
  <b-container>
    <b-card-group deck>
      <b-card overlay class="mt-5" style="min-height: 500px; max-width: 300px;">
        <div class="card-title d-flex justify-content-center">
          <h5>{{ pages.name }}</h5>
        </div>

        <b-list-group flush class="mb-4">
          <b-list-group-item
            class="d-flex justify-content-center text-white align-items-center"
          >
            <span class="mr-1">
              HyperDrive Rating
            </span>

            <span>
              <strong>{{ pages.hyperdrive_rating }}</strong></span
            >
          </b-list-group-item>

          <b-list-group-item
            class="d-flex justify-content-center text-white align-items-center"
          >
            <span class="mr-1">
              Cargo Capacity
            </span>
            <span>
              <strong>{{ pages.cargo_capacity }} </strong></span
            >
          </b-list-group-item>

          <b-list-group-item
            class="d-flex justify-content-center text-white align-items-center"
          >
            <span class="mr-1">
              Passenger Capacity
            </span>
            <span>
              <strong>{{ pages.passengers }} </strong></span
            >
          </b-list-group-item>
          <b-list-group-item
            class="d-flex justify-content-center text-white align-items-center"
          >
            <span class="mr-1">
              Ship Length
            </span>
            <span>
              <strong>{{ pages.length }} </strong></span
            >
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-around">
            <span class="text-white">
              {{ pages.cost_in_credits }}
            </span>
            Credits
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
import AddToCart from '../common/AddToCart';
import DetailsPageButton from '../common/DetailsPageButton';

export default {
  components: {
    'add-to-cart': AddToCart,
    'details-page-button': DetailsPageButton
  },
  props: ['pages']
};
</script>

<style></style>
