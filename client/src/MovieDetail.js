import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetail({user}) {

    const {id} = useParams();

    const [movieDetailObj, setMovieDetailObj] = useState([]);
    
    useEffect(() => {
        fetch(`/movies/${id}`)
        .then(response => response.json())
        .then(data => 
            setMovieDetailObj(data))
    },[id])

    console.log(movieDetailObj)
    
    const handleAddMovie = (e) => {
        fetch('/watchlist_movies', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({movie_id: movieDetailObj.id})
        })
        .then(r => r.json())
        .then(console.log)
        
    }

    return (
        <div>
            <p>
            {movieDetailObj.title}
            <img src={movieDetailObj.img_url} alt={movieDetailObj.title} />
            </p>
            <button onClick={handleAddMovie}>ADD TO WATCHLIST</button>
        </div>
    );
}

export default MovieDetail;