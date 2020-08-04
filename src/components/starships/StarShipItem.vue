<template>
  <div>
    <div class="container">
      <b-card
        :title="pages.name"
        :sub-title="`${pages.cost_in_credits}  Credits`"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        style="max-width: 40rem;"
        class="mb-2"
      >
        <b-card-text>
          <div class="d-flex flex-column">
            <strong>Model: {{ pages.model }} </strong>
            <span>HyperDrive Rating{{ pages.hyperdrive_rating }}</span>
            <span>Cargo Capacity{{ pages.cargo_capacity }}</span>
            <span>Passenger capacity : {{ pages.passengers }}</span>
            <span>Ship Length: {{ pages.length }}</span>
            <span>Ship Price: {{ pages.cost_in_credits }}</span>
          </div>
        </b-card-text>
        <div class="d-flex flex-column ">
          <add-to-cart :ship="pages"></add-to-cart>
          <details-page-button :name="pages.name"></details-page-button>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import AddToCart from '../common/AddToCart.vue'
import DetailsPageButton from '../common/DetailsPageButton.vue'

export default {
  props: ['pages'],
  components: {
    'add-to-cart': AddToCart,
    'details-page-button': DetailsPageButton
  }
}
</script>

<style></style>
