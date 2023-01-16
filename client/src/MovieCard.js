import React from 'react';

function MovieCard({movieObj}) {
    return (
        <div>
            <img src={movieObj.img_url} alt='Movie Title' />
        </div>
    );
}

export default MovieCard;