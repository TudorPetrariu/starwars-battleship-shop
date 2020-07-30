<template>
  <b-nav id="nav" pills small class="container">
    <b-navbar-brand to="/">StarShips</b-navbar-brand>
    <div class="ml-auto d-flex jutify-content-end">
      <b-nav-item active-class="active" exact :to="{ name: 'Home' }"
        >Home
      </b-nav-item>
      <b-nav-item active-class="active" :to="{ name: 'StarShipList' }">
        StarShips
      </b-nav-item>
      <b-nav-item active-class="active" :to="{ name: 'Cart' }">
        <span>Number</span>
        <b-icon-cart></b-icon-cart>
      </b-nav-item>
    </div>
  </b-nav>
</template>
