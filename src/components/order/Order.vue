<template>
  <b-container>
    <b-form v-if="!show" @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Email:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.userEmail"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Your Name:"
        label-for="input-2"
        description="Complete the field with your full name"
      >
        <b-form-input
          id="input-2"
          v-model="form.userName"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-radio-group required>
        <b-form-radio v-model="form.deliveryMethod" value="Adress Delivery:"
          >Deliver to adress</b-form-radio
        >
        <b-form-radio v-model="form.deliveryMethod" value="Pickup from store"
          >Free shipping to pickup points</b-form-radio
        >
      </b-form-radio-group>
      <b-form-group
        v-if="form.deliveryMethod === 'Adress Delivery:'"
        id="input-group-3"
        label="Address"
        label-for="input-3"
        description="Where can we deliver ?"
      >
        <b-form-input
          id="input-3"
          v-model="form.userAdress"
          required
          placeholder="Enter adress"
        ></b-form-input>
      </b-form-group>
      <!-- <div>{{ getFulPrice }}</div> -->

      <b-button type="submit" variant="primary">Finish Order</b-button>
      <b-button type="reset" variant="danger">Reset fields</b-button>
      <b-button :to="{ name: 'StarShipList' }">Back to StarShips</b-button>
    </b-form>

    <b-card
      v-if="show"
      bg-variant="dark"
      text-variant="white"
      title="Order Details"
    >
      <b-card-body class="bg-info">
        <pre>Full Name: {{ form.userName }}</pre>
        <pre>Confirmation Email: {{ form.userEmail }}</pre>
        <pre>Delivery: {{ form.deliveryMethod }} {{ form.adress }}</pre>

        <pre>Your order</pre>

        <div v-for="(carItem, i) in getCart" :key="i">
          <pre>
 {{ carItem.quantity }} x {{ carItem.name }}  Total {{
              carItem.price
            }} Credits</pre
          >
        </div>

        <!-- <strong>Total {{ getOrdersHistory }} Credits</strong> -->
      </b-card-body>
    </b-card>
    <b-button :to="{ name: 'StarShipList' }">Back to StarShips</b-button>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      form: {
        userEmail: '',
        userAdress: '',
        userName: '',
        deliveryMethod: ''
      },
      show: false
    };
  },
  computed: {
    ...mapGetters('cart', ['getCart', 'getOrdersHistory'])
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.show = true;
      this.$store.dispatch('cart/createRecentOrdersList', {
        finalOrder: this.form,
        cartItems: this.getCart[0]
      });
      console.log(this.getOrdersHistory);
    },
    onReset(e) {
      e.preventDefault();
      // Reset form values
      this.form.userEmail = '';
      this.form.userName = '';
      this.form.userAdress = '';
      this.form.deliveryMethod = '';
      this.show = false;
    }
  }
};
</script>
