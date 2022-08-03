import {axiosService} from "./axios.service";
import {urls} from "../constants";

const _genreId = 'genreId';

const genreService = {
    getAllGenres: () => axiosService.get(urls.genresList),
    getAllGenresById: (id) => axiosService.get(urls.sortMoviesByGenre`${id}`),

    setTokens: (id) => localStorage.setItem(_genreId, id),
    deleteTokens: () => localStorage.removeItem(_genreId),
    getAccessToken: () => localStorage.getItem(_genreId)
}

export {genreService}