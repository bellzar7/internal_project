import React from 'react';
import Card from 'react-bootstrap/Card'

import css from './MovieListCars.module.css'
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {MovieInfo} from "../MovieInfo/MovieInfo";

const MoviesListCard = ({movie}) => {
    const {poster_path} = movie;

    return (
        <Card className={css.card}>
            <PosterPreview item={poster_path}/>
            <MovieInfo item={movie}/>
        </Card>
    );
};

export {MoviesListCard};