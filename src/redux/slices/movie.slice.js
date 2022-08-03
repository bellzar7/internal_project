import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    current_page: null,
    errors: null,
    movie: null

};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, {rejectedWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);


const getSingleMovie = createAsyncThunk(
    'movieSlice/getSingleMovie',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getCurrentMovie(id);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results
                state.error = null
                state.current_page = action.payload.page
                movieService.deleteTokens()
            })
            .addCase(getSingleMovie.fulfilled, (state, action) => {
                state.movie = action.payload
                state.error = null
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').splice(-1)
                if (type === 'rejected') {
                    state.errors = action.payload
                } else {
                    state.errors = null
                }
            })
})

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    getAll,
    getSingleMovie
}

export {movieReducer, movieActions}