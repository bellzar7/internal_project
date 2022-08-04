import React from 'react';
import {Dropdown} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {genreService} from "../../services";

const Genre = ({item}) => {

    const navigate = useNavigate();


    const {id, name} = item


    return (
        <div>

            <Dropdown.Item onClick={() => {
                navigate(`${name}/${id}`)
            }}>{name}</Dropdown.Item>

        </div>
    );
};

export {Genre};