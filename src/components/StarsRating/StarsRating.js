import React from 'react';
import ReactStars from 'react-stars'


const StarsRating = ({item}) => {



    return (
        <div>
            <ReactStars
                count={10}
                size={21}
                color2={'#ffd700'}
                value={item}
            />
        </div>
    );
};

export {StarsRating};