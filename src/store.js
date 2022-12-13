import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
  filmsList: [],
  serieList: [],
  selectedFilm: null,
  castList: [],
  typeList: [],
  isHidden: false,
  search: {
    titolo: "",
  },

  idFilm: undefined,

  img: {
    link: "https://image.tmdb.org/t/p/",
    size: "w92",
  },
});
export function fetchFilm() {
  axios
    .get(`https://api.themoviedb.org/3/search/movie`, {
      params: {
        api_key: "f5d594055ab100c5ed443f60a610762f",
        query: store.search.titolo,
      },
    })
    .then((resp) => {
      store.filmsList = resp.data.results;
    });
}

export function fetchSerie() {
  axios
    .get(`https://api.themoviedb.org/3/search/tv`, {
      params: {
        api_key: "f5d594055ab100c5ed443f60a610762f",
        query: store.search.titolo,
      },
    })
    .then((resp) => {
      store.serieList = resp.data.results;
    });
}

export function fetchCast(id) {
  axios
    .get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
      params: {
        api_key: "f5d594055ab100c5ed443f60a610762f",
      },
    })
    .then((resp) => {
      store.castList.push({ castListAxi: resp.data.cast });
    });
}

export function fetchType(id) {
  axios
    .get(`https://api.themoviedb.org/3/movie/${id}`, {
      params: {
        api_key: "f5d594055ab100c5ed443f60a610762f",
      },
    })
    .then((resp) => {
      store.typeList = resp.data.genres;
    });
}
