import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
  filmsList: [],
  serieList: [],
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

export function fetchCast() {
  axios
    .get(`https://api.themoviedb.org/3/movie/550/credits`, {
      params: {
        api_key: "f5d594055ab100c5ed443f60a610762f",
        //movie_id: store.idFilm,
      },
    })
    .then((resp) => {
      store.castList = resp.data.cast;
      console.log(resp);
    });
}

export function fetchType() {
  axios
    .get(`https://api.themoviedb.org/3/movie/550`, {
      params: {
        api_key: "f5d594055ab100c5ed443f60a610762f",
        //movie_id: store.idFilm,
        //domandona
      },
    })
    .then((resp) => {
      store.typeList = resp.data.genres;
      console.log(resp);
    });
}
