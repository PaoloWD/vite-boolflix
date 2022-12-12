<template>
  <div class="bg-main">
    <AppHeader></AppHeader>
    <div class="container main-container">
      <AppMain></AppMain>
    </div>
  </div>
</template>
<script>
import { store } from "../src/store";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
export default {
  data() {
    return {
      store,
    };
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
