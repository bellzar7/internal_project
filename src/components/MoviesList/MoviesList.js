import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {movieActions} from "../../redux/slices";
import css from './MoviesList.module.css'
import MyPagination from "../Pagination/MyPagination";



const MoviesList = () => {

    const {movies, current_page} = useSelector(state => state.movie);
    const [query, setQuery] = useSearchParams({page: '1'});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get('page')}))

    }, [dispatch, query]);

    useEffect(() => {
        dispatch(movieActions.getAllGenres())

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
        <div>
            <div className={css.card}>{movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}</div>
            {/*на серваку помилка, пише, що  "total_pages": 34534 , а по факту постман дає інфу з пейджів не більше 500-ї, тому вручну перевірку поставив*/}

            <MyPagination total={10} current={+query.get('page')} onChangePage={handleChangePage} firstPage={firstPage} lastPage={lastPage}/>



        </div>
    );
};

export {MoviesList};