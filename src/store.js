import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
  filmsList: [],
  serieList: [],
  isHidden: false,
  search: {
    titolo: "",
  },
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
