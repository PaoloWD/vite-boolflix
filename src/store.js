import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
  filmsList: [],
  serieList: [],
  castListTemp: [],
  allGeneriList: [],
  generiInput: "",
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
  axios
    .get("https://api.themoviedb.org/3/genre/movie/list", {
      params: {
        api_key: "f5d594055ab100c5ed443f60a610762f",
      },
    })
    .then((resp) => {
      store.allGeneriList = resp.data.genres;
      console.log("tutti i generi", store.allGeneriList);
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

export function fetchCast(id, movie) {
  axios
    .get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
      params: {
        api_key: "f5d594055ab100c5ed443f60a610762f",
      },
    })
    .then((resp) => {
      if (store.castListTemp.length === 0) {
        for (let i = 0; i < 5; i++) {
          if (resp.data.cast[i]) {
            store.castListTemp.push(resp.data.cast[i]);
          } else {
            return;
          }
          movie.cast = store.castListTemp;
          console.log("movie cast", movie.cast);
        }
      }

      console.log(resp.data.cast.length);
    });
}

export function fetchType(id, movie) {
  axios
    .get(`https://api.themoviedb.org/3/movie/${id}`, {
      params: {
        api_key: "f5d594055ab100c5ed443f60a610762f",
      },
    })
    .then((resp) => {
      movie.typeList = resp.data.genres;
    });
}
