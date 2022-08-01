import React from 'react';
import Badge from "react-bootstrap/Badge";
import {GenreBadge} from "../GenreBadge/GenreBadge";

import css from './MovieInfo.module.css';

const MovieInfo = ({item}) => {

    const {title, overview, release_date, popularity, vote_average,genre_ids} = item;

    return (
        <div>
            <h5>{title}</h5>
            <GenreBadge genre_ids={genre_ids}/>
            <label>Average rating<Badge bg="info">{vote_average}</Badge></label>
        </div>
    );
};

export {MovieInfo};