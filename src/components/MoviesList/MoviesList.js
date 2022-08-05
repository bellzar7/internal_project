import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {movieActions} from "../../redux/slices";
import css from './MoviesList.module.css'
import MyPagination from "../Pagination/MyPagination";
import {genreActions} from "../../redux/slices";


const MoviesList = () => {

    const {movies} = useSelector(state => state.movie);
    const [query, setQuery] = useSearchParams({page: '1'});
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get('page')}))

    }, [dispatch, query]);

    useEffect(() => {
        dispatch(genreActions.getAllGenres())

    }, [dispatch]);


    const firstPage = () => {
        const page = 1;
        setQuery({page: `${page}`})
    };
    const lastPage = () => {
        const page = 500;
        setQuery({page: `${page}`})
    };


    const handleChangePage = (page) => {
        setQuery({page: `${page}`})
    }


    return (
        <div className={css.box}>
            <MyPagination total={10} current={+query.get('page')} onChangePage={handleChangePage} firstPage={firstPage}
                          lastPage={lastPage}/>

            <div className={css.card}>{movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}</div>
        </div>
    );
};

export {MoviesList};