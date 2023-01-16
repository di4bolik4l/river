import React from 'react';
import MovieCard from './MovieCard';

function MainContainer({movie, setMovie}) {

    return (
        <div>
            {movie.map(movieObj => <MovieCard key={movieObj.id} movieObj={movieObj} />)}
        </div>
    );
}

export default MainContainer;