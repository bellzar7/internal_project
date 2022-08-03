import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Genre} from "../Genre/Genre";
import {Dropdown} from "react-bootstrap";
import {genreActions} from "../../redux/slices";

const Genres = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreActions.getAllGenres())
    }, [dispatch])

    const {genres} = useSelector(state => state.genre);


    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Sort by genre
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {genres.map(value => <Genre key={value.id} item={value}/>)}
                </Dropdown.Menu>
            </Dropdown>


        </div>
    );
};

export {Genres};