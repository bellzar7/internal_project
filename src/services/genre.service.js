import {axiosService} from "./axios.service";
import {urls} from "../constants";

const _genreId = 'genreId';

const genreService = {
    getAllGenres: () => axiosService.get(urls.genresList),
    getAllMoviesByGenresId: (with_genres, page) => axiosService.get(urls.discoverMovie, {params: {with_genres, page}}),

    setTokens: (id) => localStorage.setItem(_genreId, id),
    deleteTokens: () => localStorage.removeItem(_genreId),
    getAccessToken: () => localStorage.getItem(_genreId)
}

export {genreService}