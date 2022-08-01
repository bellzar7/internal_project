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

  let f =  genres.filter((g, index) => {
        if (g.id === genre_ids[index]) {
            return g.name
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