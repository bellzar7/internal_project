import React from 'react';

import css from './MovieListCars.module.css'
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {MovieInfo} from "../MovieInfo/MovieInfo";
import {GenreBadge} from "../GenreBadge/GenreBadge";

const MoviesListCard = ({movie}) => {
const {genre_ids, poster_path} = movie;

    return (
        <div className={css.card}>
            <PosterPreview item={poster_path}/>
            <MovieInfo item={movie}/>
            <GenreBadge genre_ids={genre_ids}/>
        </div>
    );
};

export {MoviesListCard};