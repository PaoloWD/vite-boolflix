<template>
  <div class="bg-dark">
    <form @submit.prevent="onSubmit" action="">
      <input type="text" v-model="store.search.titolo" />
      <button type="submit" class="btn btn-primary">Filtra Film</button>
    </form>
  </div>
</template>
<script>
import { store, fetchFilm, fetchSerie } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    onSubmit() {
      fetchFilm();
      fetchSerie();
      store.isHidden = true;
      //chiedere
    },
  },
};
</script>
<style scoped lang="scss"></style>
