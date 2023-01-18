import React from 'react';
import { Link } from "react-router-dom";



function MovieCard({movieObj}) {

    const handleAddMovie = (e) => {
        console.log(":P")
        fetch('/watchlist_movies', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({movie_id: movieObj.id})
        })
        .then(r => r.json())
        .then(console.log)
    }

    return (
        
        <div className="flex flex-wrap gap-2">
            <Link to={`/movies/${movieObj.id}`}>
                <img className="movie-image" src={movieObj.img_url} alt='Movie Title' />
            </Link>
            <button onClick={handleAddMovie}>ADD TO WATCHLIST</button>
        </div>
    );
}

export default MovieCard;