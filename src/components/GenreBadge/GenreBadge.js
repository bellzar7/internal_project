import React from 'react';
import {useSelector} from "react-redux";

const GenreBadge = ({genre_ids}) => {

    const {genres} = useSelector(state => state.movie);

    // const allG = genres.reduce((acc, genre) => {
    //     if (genre.id === genre_ids) {
    //         acc.push(genre.name)
    //     }
    //     return acc
    // }, [])

    let f = genres.filter(value => {

        for (let id of genre_ids) {
            if (value.id === id) {
                return ('asd')
            }
        }
    })

    return (
        <div>
            {JSON.stringify(f)}
            badge of ganre
        </div>
    );
};

export {GenreBadge};