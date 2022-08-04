import React from 'react';
import Badge from "react-bootstrap/Badge";


import css from './MovieInfo.module.css';
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {GenreBadge} from "../GenreBadge/GenreBadge";


const MovieInfo = ({index}) => {


    const {title, release_date, vote_average, genres, backdrop_path, overview,genre_ids} = index;


    return (
        <div className={css.box}>
            <div className={css.im}>
                <PosterPreview item={backdrop_path}/>
            </div>
            <div className={css.inf}>
                <h4>{title}</h4>
                <label>Average rating<Badge bg="info">{vote_average}</Badge></label>
                {genre_ids&&<GenreBadge genre_ids={genre_ids}/>}
                {genres&&<GenreBadge genre_ids={genres}/>}

                <p>Release date: {release_date}</p>
                <p>{overview}</p>
            </div>

        </div>
    );
};

export {MovieInfo};