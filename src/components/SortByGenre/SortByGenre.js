import React, {useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {genreActions} from "../../redux/slices";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import MyPagination from "../Pagination/MyPagination";
import css from './SortByGenre.module.css';


const SortByGenre = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});
    const {sortMovies} = useSelector(state => state.genre);


    useEffect(() => {
        dispatch(genreActions.getSortMovies({with_genres: id, page: query.get('page')}))
    }, [dispatch, id, query])


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
            <div className={css.card}>{sortMovies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}</div>
        </div>
    );
};

export {SortByGenre};