import React from 'react';
import MovieDetail from './MovieDetail';
import { Link } from "react-router-dom";



function MovieCard({movieObj}) {
    return (
        
        <div className="flex flex-wrap gap-2">
            <Link to={`/movies/${movieObj.id}`}>
                <img className="movie-image" src={movieObj.img_url} alt='Movie Title' />
            </Link>
            
            
            {/* <MovieDetail movieObj={movieObj} /> */}
        </div>
    );
}

export default MovieCard;