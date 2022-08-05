import React from 'react';
import {Outlet} from "react-router-dom"
import {useSelector} from "react-redux";


import {Header} from "../components";
import css from './layout.module.css'

const MainLayout = () => {

    const {errors, theme} = useSelector(state => state.movie);

    return (
        <div>
            <Header/>
            <div className={theme === 'dark' ? css.dark : css.light}>
                {errors && <h3>{JSON.stringify(errors)}</h3>}
                <Outlet/>
            </div>
        </div>
    );
};

export {MainLayout};