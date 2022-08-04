import React from 'react';

import css from './header.module.css';
import {UserInfo} from "../userInfo/UserInfo";
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

const Header = () => {

const navigate = useNavigate();

    return (
        <div className={css.box1}>
            <div className={css.box}>
                <div >
                    <Button variant="secondary" onClick={()=> navigate('movies')}>Movies</Button>
                    <Button variant="secondary" onClick={()=> navigate('genres')}>Genres</Button>
                </div>
                <div>
                <UserInfo/>
                </div>
            </div>

        </div>
    );
};

export {Header};