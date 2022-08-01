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

    return (
        <div>
            <div className={css.card}>{movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}</div>
            <button disabled={current_page<=1} onClick={prevPage}>Prev</button>
            <button disabled={current_page>=500} onClick={nextPage}>Next</button> {/*на серваку помилка, пише, що  "total_pages": 34534 , а по факту пейджів не більше 500, тому вручну перевірку поставив*/}
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{current_page}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </div>
    );
};

export {MoviesList};