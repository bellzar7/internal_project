import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {genreActions} from "../../redux/slices";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

const SortByGenre = () => {

    const dispatch = useDispatch();
    const {sortMovies} = useSelector(state => state.genre);
    const {id} = useParams();

    useEffect(() => {
       dispatch( genreActions.getSortMovies(id))
    }, [dispatch, id])


    return (
        <div>
            {sortMovies.map(movie=> <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {SortByGenre};