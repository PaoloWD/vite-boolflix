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
      store.filmsList.forEach((element) => {
        fetchCast(element.id);
        element["cast"] = store.castList;
        // console.log("castList", store.castList);
        //console.log("filmList", store.filmsList);
        //console.log("id", element.id);
        console.log("Cast", element.cast);
      });
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
      store.castList.push(resp.data.cast);
      console.log("resp", resp.data.cast);
      //console.log("fetchCast no 0", store.filmsList);
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
