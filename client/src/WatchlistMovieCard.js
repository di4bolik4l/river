import React from 'react';
import MovieDetail from './MovieDetail';
import { Link } from "react-router-dom";



function WatchlistMovieCard({watchListMovieObj,loggedInUserMovies, setLoggedInUserMovies}) {

    const handleRemoveMovie = (e) => {

        fetch(`/watchlist_movies/${watchListMovieObj.id}`, {
            method: 'DELETE',
            headers: {"Content-Type" : "application/json"}
        })

        const filterResult = loggedInUserMovies.filter(wmobj => {
            console.log(wmobj.id, watchListMovieObj.id)
            if(wmobj.id !== watchListMovieObj.id) {
                return (
                    wmobj
                )
            }
        })
        setLoggedInUserMovies([...filterResult])
    }

    return (
        
        <div className="flex flex-wrap gap-2">
            <Link to={`/movies/${watchListMovieObj.movie.id}`}>
                <img className="movie-image" src={watchListMovieObj.movie.img_url} alt='Movie Title' />
            </Link>
            <button onClick={handleRemoveMovie}>REMOVE</button>
            
            
            {/* <MovieDetail movieObj={watchListMovieObj.movie} /> */}
        </div>

    );
}

export default WatchlistMovieCard;