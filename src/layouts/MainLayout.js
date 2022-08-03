import React from 'react';
import {Outlet} from "react-router-dom"
import {useSelector} from "react-redux";

import {Header} from "../components";

const MainLayout = () => {

    const {errors} = useSelector(state => state.movie);

    return (
        <div>
            <Header/>
            {errors && <h3>{JSON.stringify(errors)}</h3>}
            <Outlet/>
        </div>
    );
};

export {MainLayout};