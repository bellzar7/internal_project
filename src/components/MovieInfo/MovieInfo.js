import React from 'react';
import Badge from "react-bootstrap/Badge";


import css from './MovieInfo.module.css';



const MovieInfo = ({index}) => {


    const {title, release_date, vote_average, genres} = index;



    return (
        <div>
            <h5>{title}</h5>
            <label>Average rating<Badge bg="info">{vote_average}</Badge></label>
            {genres.map(value=> <Badge bg='secondary' key={value.id}>{value.name}</Badge>)}
            <p>Release date: {release_date}</p>
        </div>
    );
};

export {MovieInfo};