import React from 'react';
import Card from 'react-bootstrap/Card'

import css from './MovieListCars.module.css'
import Badge from "react-bootstrap/Badge";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {urls} from "../../constants";
import {Button} from "react-bootstrap";

const MoviesListCard = ({movie}) => {
    const {poster_path, title, vote_average, genre_ids} = movie;

    return (
        <Card className={css.card}>
            <Card.Img variant="top" src={`${urls.image}${poster_path}`} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <label>Average rating<Badge bg="info">{vote_average}</Badge></label>
                <GenreBadge genre_ids={genre_ids}/>
                <hr/>
                <Button variant="outline-primary">Detail</Button>
            </Card.Body>
        </Card>
    );
};

export {MoviesListCard};