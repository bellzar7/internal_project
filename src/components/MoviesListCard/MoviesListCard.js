import React from 'react';
import Card from 'react-bootstrap/Card'
import Badge from "react-bootstrap/Badge";
import {Button} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";

import css from './MovieListCars.module.css'
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {urls} from "../../constants";
import {movieService} from "../../services";

const MoviesListCard = ({movie}) => {
    const {poster_path, title, vote_average, genre_ids, id} = movie;
    const navigate = useNavigate();


    return (
        <Card className={css.card} onClick={()=> {
            navigate(`${id}`)
            movieService.setTokens(id)
        }}>
            <Card.Img variant="top" src={`${urls.image}${poster_path}`}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <label>Average rating<Badge bg="info">{vote_average}</Badge></label>
                <GenreBadge genre_ids={genre_ids}/>
                <hr/>
                <Link to={id.toString()} onClick={() => movieService.setTokens(id)}><Button
                    variant="outline-primary" className={css.btn}>Detail</Button></Link>
            </Card.Body>
        </Card>
    );
};

export {MoviesListCard};