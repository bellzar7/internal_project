import React from 'react';
import Card from 'react-bootstrap/Card'

import css from './MovieListCars.module.css'
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {MovieInfo} from "../MovieInfo/MovieInfo";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {StarsRating} from "../StarsRating/StarsRating";

const MoviesListCard = ({movie}) => {
const {genre_ids, poster_path, vote_average} = movie;

    return (
        <Card className={css.card}>
            <PosterPreview item={poster_path}/>
            <StarsRating item={vote_average}/>
            <MovieInfo item={movie}/>
            <GenreBadge genre_ids={genre_ids}/>
        </Card>
    );
};

export {MoviesListCard};