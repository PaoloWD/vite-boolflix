<template>
  <div class="bg-dark">
    <form @submit.prevent="onSubmit" action="">
      <input type="text" v-model="store.search.titolo" />
      <button type="submit" class="btn btn-primary">Filtra Film</button>
    </form>
  </div>
</template>
<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    onSubmit() {
      store.isHidden = true;
      this.$emit("search");
      store.search = "";
      //chiedere
    },
  },
};
</script>
<style scoped lang="scss">
@use "../src/styles/main.scss";
</style>
