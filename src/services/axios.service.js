import axios from "axios";

import {baseURL} from "../constants";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config) => {
    const access = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTdjYmJlYTVjMjdiNzUzN2VlZDZjNDkzNzkzY2ZkMSIsInN1YiI6IjYyZTU2MGJiZmM1ZjA2MDA1OWMyZDgzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WDhj3rsf7cvtiVyICQYEq0nfqV1EkinFAGSCIxnbr4I';
    if (access) {
        config.headers.Authorization = `Bearer ${access}`
    }
    return config
})

export {axiosService};