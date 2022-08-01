import React from 'react';
import Card from 'react-bootstrap/Card'

import css from './MovieListCars.module.css'
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {MovieInfo} from "../MovieInfo/MovieInfo";
import {StarsRating} from "../StarsRating/StarsRating";

const MoviesListCard = ({movie}) => {
    const {poster_path, vote_average} = movie;

    return (
        <Card className={css.card}>
            <PosterPreview item={poster_path}/>
            <MovieInfo item={movie}/>
            <StarsRating item={vote_average}/>
        </Card>
    );
};

export {MoviesListCard};