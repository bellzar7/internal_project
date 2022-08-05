import React from 'react';
import css from './userInfo.module.css';

const UserInfo = () => {
    return (
        <div className={css.box}>
            <div>User</div>
            <div className={css.ow}></div>
        </div>
    );
};

export {UserInfo};