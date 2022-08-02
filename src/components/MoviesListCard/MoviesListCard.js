import React from 'react';
import Card from 'react-bootstrap/Card'

import css from './MovieListCars.module.css'
import Badge from "react-bootstrap/Badge";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {urls} from "../../constants";
import {Button} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";

const MoviesListCard = ({movie}) => {
    const {poster_path, title, vote_average, genre_ids, id} = movie;

    const navigate = useNavigate();

    return (
        <Card className={css.card}>
            <Card.Img variant="top" src={`${urls.image}${poster_path}`} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <label>Average rating<Badge bg="info">{vote_average}</Badge></label>
                <GenreBadge genre_ids={genre_ids}/>
                <hr/>
                <Link to={id.toString()} state={{...movie}}><Button  variant="outline-primary">Detail</Button></Link>
                <Button  variant="outline-primary" onClick={()=> navigate(`${id}`, {state:movie})}>Detail</Button>
                <Button  variant="outline-primary" onClick={()=> <Redirect
                    to={{
                        pathname: "/login",
                        search: "?utm=your+face",
                        state: { referrer: currentLocation }
                    }}
                />}>Detail</Button>
            </Card.Body>
        </Card>
    );
};

export {MoviesListCard};