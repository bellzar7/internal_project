import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState = {
    movies: [],
    current_page: null,
    errors: null,
    genres: []

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

const getAllGenres = createAsyncThunk(
    'movieSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAllGenres();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

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
            })
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genres = action.payload.genres
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
    getAllGenres
}

export {movieReducer, movieActions}