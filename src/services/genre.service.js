import {axiosService} from "./axios.service";
import {urls} from "../constants";

const genreService = {
    getAllGenres: () => axiosService.get(urls.genresList),
    getAllMoviesByGenresId: (with_genres, page) => axiosService.get(urls.discoverMovie, {params: {with_genres, page}}),
}

export {genreService}