import React from 'react';

import css from './PosterPreview.module.css'
import {urls} from "../../constants";

const PosterPreview = ({item}) => {
    
    return (

            <img src={`${urls.image}${item}`} alt="" className={css.post}/>

    );
};

export {PosterPreview};