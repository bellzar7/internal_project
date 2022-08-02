import React, {useEffect, useState} from 'react';
import Badge from "react-bootstrap/Badge";
import {GenreBadge} from "../GenreBadge/GenreBadge";

import css from './MovieInfo.module.css';
import {useLocation, useParams} from "react-router-dom";
import {movieService} from "../../services";

const MovieInfo = () => {
    const {state: item} = useLocation();
    const {id} = useParams();

    const [mov, setMov] = useState(null);

    useEffect( () => {
        // if (!item){
        movieService.getCurrentMovie(id, {params: {}}).then(value => setMov(value));
        // } else {
        //     setMov(item)
        // }

    }, [id, item])


    // const {title, release_date, vote_average, genre_ids} = mov;


    return (
        <div>
            {/*<h5>{title}</h5>*/}
            {/*<label>Average rating<Badge bg="info">{vote_average}</Badge></label>*/}
            {/*<GenreBadge genre_ids={genre_ids}/>*/}
            {/*<p>Release date: {release_date}</p>*/}
            {JSON.stringify(mov)}
        </div>
    );
};

export {MovieInfo};