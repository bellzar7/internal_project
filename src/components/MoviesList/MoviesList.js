import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Pagination} from "react-bootstrap";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {movieActions} from "../../redux/slices";
import css from './MoviesList.module.css'

const MoviesList = () => {

    const {movies, current_page} = useSelector(state=> state.movie);
    const [query, setQuery] = useSearchParams({page: '1'});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get('page')}))

    }, [dispatch, query]);

    useEffect(() => {
        dispatch(movieActions.getAllGenres())

    }, [dispatch]);

    const prevPage = () => {
        const page = +query.get('page') - 1;
        setQuery({page: `${page}`})
    };

    const nextPage = () => {
        const page = +query.get('page') + 1;
        setQuery({page: `${page}`})
    };
    const firstPage = () => {
        const page = 1;
        setQuery({page: `${page}`})
    };
    const lastPage = () => {
        const page = 500;
        setQuery({page: `${page}`})
    };

    return (
        <div>
            <div className={css.card}>{movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}</div>
            <button disabled={current_page<=1} onClick={prevPage}>Prev</button>
            <button disabled={current_page>=500} onClick={nextPage}>Next</button> {/*на серваку помилка, пише, що  "total_pages": 34534 , а по факту пейджів не більше 500, тому вручну перевірку поставив*/}
            <Pagination>
                <Pagination.First onClick={firstPage} />
                <Pagination.Prev disabled={current_page<=1} onClick={prevPage} />

                <Pagination.Item >{current_page}</Pagination.Item>
                <Pagination.Item >{current_page+1}</Pagination.Item>
                <Pagination.Item>{current_page+2}</Pagination.Item>
                <Pagination.Item>{current_page+3}</Pagination.Item>
                <Pagination.Item>{current_page+4}</Pagination.Item>
                <Pagination.Item>{current_page+5}</Pagination.Item>
                <Pagination.Item>{current_page+6}</Pagination.Item>

                <Pagination.Next disabled={current_page>=500} onClick={nextPage} />
                <Pagination.Last onClick={lastPage} />
            </Pagination>
        </div>
    );
};

export {MoviesList};