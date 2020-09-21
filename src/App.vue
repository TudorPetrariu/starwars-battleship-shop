<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('battleships/fetchBattleShips');
  }
};
</script>
<style>
body {
  background-image: url('./assets/images/x-wing-green-wallpaper.jpg');
  height: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
