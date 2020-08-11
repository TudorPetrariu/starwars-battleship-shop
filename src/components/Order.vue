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
          v-model="form.email"
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
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-radio-group required>
        <b-form-radio v-model="form.checked" value="Adress Delivery:"
          >Deliver to adress</b-form-radio
        >
        <b-form-radio v-model="form.checked" value="Pickup from store"
          >Free shipping to pickup points</b-form-radio
        >
      </b-form-radio-group>
      <b-form-group
        v-if="form.checked === 'Adress Delivery:'"
        id="input-group-3"
        label="Address"
        label-for="input-3"
        description="Where can we deliver ?"
      >
        <b-form-input
          id="input-3"
          v-model="form.adress"
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
        <pre>Full Name: {{ form.name }}</pre>
        <pre>Confirmation Email: {{ form.email }}</pre>
        <pre>Delivery: {{ form.checked }} {{ form.adress }}</pre>

        <pre>Your order</pre>

        <div v-for="(carItem, i) in getFullCart" :key="i">
          <pre>
 {{ carItem.quantity }} x {{ carItem.name }} = {{ carItem.price }} Credits</pre
          >
        </div>
        <strong>Total {{ getFulPrice }} Credits</strong>
      </b-card-body>
    </b-card>
    <b-button :to="{ name: 'StarShipList' }">Back to StarShips</b-button>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        adress: '',
        name: '',
        checked: ''
      },
      show: false
    };
  },
  computed: {
    getFullCart() {
      return this.$store.getters['cart/getCart'];
    },
    getFulPrice() {
      return this.$store.getters['cart/getTotalCartPrice'];
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.show = true;
    },
    onReset(e) {
      e.preventDefault();
      // Reset form values
      this.form.email = '';
      this.form.name = '';
      this.form.adress = '';
      this.form.checked = '';
      this.show = false;
    }
  }
};
</script>
