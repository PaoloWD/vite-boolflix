<template>
  <div class="bg-main">
    <AppHeader @search="onSearch"></AppHeader>
    <div class="container main-container">
      <AppMain></AppMain>
    </div>
  </div>
</template>
<script>
import { fetchFilm, fetchSerie, store } from "../src/store";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    onSearch() {
      fetchFilm();
      fetchSerie();
    },
  },
  components: { AppHeader, AppMain },
};
</script>
<style lang="scss">
.main-container {
  height: 100vh;
  overflow: auto;
}
.bg-main {
  background-color: #434343;
}
</style>
