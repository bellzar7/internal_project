import {axiosService} from "./axios.service";
import {urls} from "../constants";

const _id = 'id';

const movieService = {
    getAll: (page) => axiosService.get(urls.discoverMovie, {params: {page}}),
    getCurrentMovie: (movie_id) => axiosService.get(`${urls.currentMovie}/${movie_id}`),

    setTokens: (id) => localStorage.setItem(_id, id),
    deleteTokens: () => localStorage.removeItem(_id),
    getAccessToken: () => localStorage.getItem(_id)
}

export {movieService}