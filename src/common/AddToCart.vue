<template>
  <div>
    <input type="text" v-model="quantity" />
    <button :disabled="quantity <= 0" @click="addItemToCart" class="btn-succes">
      Add Items to Cart
    </button>
  </div>
</template>

<script>
export default {
  props: ['ship'],
  data () {
    return {
      quantity: 0
    }
  },
  methods: {
    addItemToCart () {
      const order = {
        name: this.ship.name,
        price: this.ship.cost_in_credits,
        quantity: this.quantity
      }
      this.$store.commit('cart/setItemToCart', order)
      this.quantity = 0
    }
  }
}
</script>

<style></style>
