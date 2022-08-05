import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

import css from './header.module.css';
import {UserInfo} from "../userInfo/UserInfo";
import {movieActions} from "../../redux/slices";

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {theme} = useSelector(state => state.movie);

    return (
        <div className={css.box1}>
            <div className={theme === 'dark' ? css.dark : css.light}>
                <div className={css.box1}>
                    <Button variant="secondary" onClick={() => navigate('movies')}>Movies</Button>
                    <Button variant="secondary" onClick={() => navigate('genres')}>Genres</Button>
                </div>
                <div className={css.box1}>
                    <Button variant="light"
                            onClick={() => dispatch(movieActions.changeTheme('light'))}>Light</Button>{' '}
                    <Button variant="dark" onClick={() => dispatch(movieActions.changeTheme('dark'))}>Dark</Button>
                </div>
                <div className={css.box1}>
                    <UserInfo/>
                </div>
            </div>

        </div>
    );
};

export {Header};