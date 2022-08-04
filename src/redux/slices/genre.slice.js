import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";

const initialState = {
    sortMovies: [],
    genres: []
};


const getAllGenres = createAsyncThunk(
    'genreSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAllGenres();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getSortMovies = createAsyncThunk(
    'genreSlice/getSortMovies',
    async ({with_genres, page}, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAllMoviesByGenresId(with_genres,page);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)

        }
    }
)


const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genres = action.payload.genres
                state.error = null
            })
            .addCase(getSortMovies.fulfilled, (state, action) => {
                state.sortMovies = action.payload.results
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

const {reducer: genreReducer, actions} = genreSlice;

const genreActions = {
    getAllGenres,
    getSortMovies
}

export {genreReducer, genreActions}