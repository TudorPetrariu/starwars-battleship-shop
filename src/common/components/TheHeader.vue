<template>
  <div>
    <b-nav pills small>
      <b-navbar-brand class="col-md-9" to="/">StarShips</b-navbar-brand>
      <b-nav-item active-class="active" exact :to="{ name: 'Home' }"
        >Home</b-nav-item
      >
      <b-nav-item
        active-class="active"
        exact
        :to="{ name: 'StarShipList' }"
      >
        StarShips
      </b-nav-item>

      <b-nav-item
        active-class="active"
        exact
        :to="{ name: 'Cart' }"
        >
        <b-icon-cart></b-icon-cart>
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
</script>

<style></style>
