import React from 'react';
import Badge from "react-bootstrap/Badge";
import {GenreBadge} from "../GenreBadge/GenreBadge";

import css from './MovieInfo.module.css';

const MovieInfo = ({item}) => {

    const {title, release_date, vote_average,genre_ids} = item;

    return (
        <div>
            <h5>{title}</h5>
            <label>Average rating<Badge bg="info">{vote_average}</Badge></label>
            <GenreBadge genre_ids={genre_ids}/>
            <p>Release date: {release_date}</p>
        </div>
    );
};

export {MovieInfo};