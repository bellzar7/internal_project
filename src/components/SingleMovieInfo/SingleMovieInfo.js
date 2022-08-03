import React from 'react';
import {movieService} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../../redux/slices";
import {MovieInfo} from "../MovieInfo/MovieInfo";

const SingleMovieInfo = () => {

    const id = movieService.getAccessToken();
    const dispatch = useDispatch();
    const {movie} = useSelector(state => state.movie);

    useEffect(() => {
        dispatch(movieActions.getSingleMovie(id))

    }, [dispatch, id]);


    return (
        <div>
            {movie && <MovieInfo index={movie}/>}
        </div>
    );
};

export {SingleMovieInfo};