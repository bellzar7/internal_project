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
            {/*<img className={css.fon} src="https://oir.mobi/uploads/posts/2021-03/1616430085_19-p-zadnii-fon-dlya-saita-23.jpg" alt=""/>*/}
            <MyPagination total={10} current={+query.get('page')} onChangePage={handleChangePage} firstPage={firstPage}
                          lastPage={lastPage}/>

            <div className={css.card}>{movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}</div>
        </div>
    );
};

export {MoviesList};