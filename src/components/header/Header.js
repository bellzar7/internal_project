import React from 'react';

import css from './header.module.css';
import {UserInfo} from "../userInfo/UserInfo";

const Header = () => {
    return (
        <div className={css.box1}>
            <div className={css.box}>
                headeer
                <UserInfo/>
            </div>

        </div>
    );
};

export {Header};