import React from 'react';

import css from './PosterPreview.module.css'
import {urls} from "../../constants";

const PosterPreview = ({item}) => {
    
    return (
        <div>
            <img src={`${urls.image}${item}`} alt="" className={css.post}/>
        </div>
    );
};

export {PosterPreview};