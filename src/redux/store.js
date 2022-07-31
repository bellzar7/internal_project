import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices";


const rootReducers = combineReducers({
    movie: movieReducer
});

const setupStore = () => configureStore({
    reducer: rootReducers
});

export {setupStore}