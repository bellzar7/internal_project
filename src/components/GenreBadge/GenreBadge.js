import React from 'react';
import Badge from "react-bootstrap/Badge";
import 'bootstrap/dist/css/bootstrap.min.css';

import {useSelector} from "react-redux";

const GenreBadge = ({genre_ids}) => {

    const {genres} = useSelector(state => state.movie);

    const genresCurrentFilm = genres.reduce((acc, genre) => {
        for (let id of genre_ids) {
            if (genre.id === id) {
                acc.push(genre)
            }
        }
        return acc
    }, [])


    return (
        <div>
            {genresCurrentFilm.map(value=> <Badge bg='secondary' key={value.id}>{value.name}</Badge>)}
        </div>
    );
};

export {GenreBadge};