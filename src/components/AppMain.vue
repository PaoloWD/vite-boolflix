<template>
  <div class="p-3 bg-container">
    <div class="container">
      <h2 class="text-white py-5" v-if="store.isHidden">Films</h2>
      <div class="row g-5">
        <div
          @mouseenter="store.selectedFilm = card"
          class="col-lg-3 col-md-4 col-sm-6"
          v-for="card in store.filmsList"
        >
          <CardFilm :singleCard="card"></CardFilm>
        </div>
      </div>
      <h2 class="text-white py-5" v-if="store.isHidden">Serie Tv</h2>
      <div class="row g-5">
        <div class="col-lg-3 col-md-4 col-sm-6" v-for="card in store.serieList">
          <CardSerie :singleCard="card"></CardSerie>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { store } from "../store";
import CardFilm from "./CardFilm.vue";
import CardSerie from "../components/CardSerie.vue";

export default {
  nane: "AppMain",
  data() {
    return {
      store,
    };
  },
  methods: {},

  components: { CardFilm, CardSerie },
};
</script>
<style scope lang="scss"></style>
