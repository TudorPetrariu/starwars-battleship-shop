<template>
  <div>
    <div>
      <b-card
        :title="ship.name"
        :sub-title="`${ship.cost_in_credits}  Credits`"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          <div class="d-flex flex-column">
            <strong>Model: {{ ship.model }} </strong>
            <span>Passenger capacity : {{ ship.passengers }}</span>
          </div>
        </b-card-text>
      </b-card>
      <add-to-cart :ship="ship"></add-to-cart>
      <details-page-button :name="ship.name"></details-page-button>
    </div>
  </div>
</template>

<script>
import AddToCart from '../common/AddToCart.vue'
import DetailsPageButton from '../common/DetailsPageButton.vue'

export default {
  props: ['ship'],
  components: {
    'add-to-cart': AddToCart,
    'details-page-button': DetailsPageButton
  }
}
</script>

<style></style>
