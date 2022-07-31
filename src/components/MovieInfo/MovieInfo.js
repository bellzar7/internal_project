import React from 'react';

const MovieInfo = ({item}) => {

    const {title, overview, release_date, popularity} = item;

    return (
        <div>
            info about movie
        </div>
    );
};

export {MovieInfo};