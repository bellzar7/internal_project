import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

import {movieService} from "../../services";
import {movieActions} from "../../redux/slices";
import {MovieInfo} from "../MovieInfo/MovieInfo";

const SingleMovieInfo = () => {

    const {state} = useLocation();
    const id = movieService.getAccessToken();
    const dispatch = useDispatch();
    const {movie} = useSelector(state => state.movie);
    const [mov, setMov] = useState(null);

    useEffect(() => {
        if (!state) {
            dispatch(movieActions.getSingleMovie(id))
            setMov(movie)
        } else {
            setMov(state)
        }

    }, [dispatch, id, movie, state]);


    return (
        <div>
            {mov && <MovieInfo index={mov}/>}
        </div>
    );
};

export {SingleMovieInfo};