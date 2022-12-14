<template>
  <div @click="getInfoFilm">
    <div></div>
    <div class="card overflow-auto" style="width: 18rem">
      <div class="overlay"></div>
      <div v-if="singleCard.poster_path" class="overflow-hidden">
        <img
          class="card-img-top position-relative"
          :src="store.img.link + store.img.size + singleCard.poster_path"
          alt=""
        />
      </div>
      <div class="img-none overflow-hidden" v-else>
        <img src="../../public/Dragon_Ball-cover.jpeg" alt="" />
      </div>
      <div class="card-body pos-abs h-100 text-white overflow-auto">
        <p>Titolo:{{ singleCard.title }}</p>
        <p>Titolo originale: {{ singleCard.original_title }}</p>
        <p>Lingua originale {{ singleCard.original_language }}</p>
        <p>
          Voto:
          <span v-for="stars in math()"> {{ stars }}</span>
        </p>
        <p>Descrizione: {{ singleCard.overview }}</p>

        <div v-if="singleCard.cast">
          <p v-for="i in 5">{{ singleCard.cast[i - 1].name }}</p>
          <p v-for="(typeInfo, i) in singleCard.typeList">
            {{ `Genere ${i + 1}: ` + typeInfo.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { fetchCast, fetchType, store } from "../store";
import CastInfo from "./CastInfo.vue";
export default {
  name: "CardFilm",
  props: {
    singleCard: {
      type: Object,
    },
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    math() {
      let toReturn = [];
      let voto = this.singleCard.vote_average;
      voto = voto / 2;
      for (let i = 0; i < Math.ceil(voto); i++) {
        toReturn.push("*");
      }
      return toReturn;
    },

    toggle() {
      if (this.store.isHidden === true) {
        this.store.isHidden = false;
      } else {
        this.store.isHidden = true;
      }
    },

    getInfoFilm() {
      fetchCast(this.singleCard.id, this.singleCard);
      fetchType(this.singleCard.id, this.singleCard);
      this.toggle();
    },
  },
  components: { CastInfo },
};
</script>
<style scoped lang="scss">
.img-none {
  z-index: 2;
  img {
    width: 100%;
    display: block;
  }
}
.pos-abs {
  position: absolute;
  top: 0;
  left: 0;
}

.card-img-top {
  z-index: 2;
}
.card {
  height: 400px;
  &:hover .overlay {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    left: 0;
    background-color: #000;
    opacity: 0.9;
    z-index: 3;
    display: block;
  }
  &:hover .card-body {
    z-index: 5;
  }
}
</style>
