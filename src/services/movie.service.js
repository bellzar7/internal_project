import {axiosService} from "./axios.service";
import {urls} from "../constants";

const movieService = {
    getAll: (page =1)=> axiosService.get(urls.discoverMovie, {params: {page}})
}

export {movieService}