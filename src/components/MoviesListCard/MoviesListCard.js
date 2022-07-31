import React from 'react';

import css from './MovieListCars.module.css'
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {MovieInfo} from "../MovieInfo/MovieInfo";
import {GenreBadge} from "../GenreBadge/GenreBadge";

const MoviesListCard = ({movie}) => {
const {adult, backdrop_path, genre_ids, poster_path, id} = movie;

    return (
        <div className={css.card}>
            <PosterPreview key={id} item={poster_path}/>
            <MovieInfo key={id} item={movie}/>
            <GenreBadge key={id} genre_ids={genre_ids}/>
            {id}
        </div>
    );
};

export {MoviesListCard};