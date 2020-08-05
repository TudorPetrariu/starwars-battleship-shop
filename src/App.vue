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
<style></style>
