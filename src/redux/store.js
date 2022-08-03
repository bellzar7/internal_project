import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genreReducer, movieReducer} from "./slices";


const rootReducers = combineReducers({
    movie: movieReducer,
    genre: genreReducer
});

const setupStore = () => configureStore({
    reducer: rootReducers
});

export {setupStore}