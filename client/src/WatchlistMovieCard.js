import React from 'react';
import MovieDetail from './MovieDetail';
import { Link } from "react-router-dom";



function WatchlistMovieCard({watchListMovieObj}) {
    return (
        
        <div className="flex flex-wrap gap-2">
            <Link to={`/movies/${watchListMovieObj.movie.id}`}>
                <img className="movie-image" src={watchListMovieObj.movie.img_url} alt='Movie Title' />
            </Link>
            <button>X</button>
            
            
            <MovieDetail movieObj={watchListMovieObj.movie} />
        </div>
        
    );
}

export default WatchlistMovieCard;