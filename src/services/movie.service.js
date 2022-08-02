import {axiosService} from "./axios.service";
import {urls} from "../constants";

const movieService = {
    getAll: (page = 1) => axiosService.get(urls.discoverMovie, {params: {page}}),
    getAllGenres: () => axiosService.get(urls.genresList),
    getCurrentMovie: (movie_id) => axiosService.get(`${urls.currentMovie}/${movie_id}`)
}

export {movieService}