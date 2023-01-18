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
    
    const handleAddMovie = () => {
        console.log(":P")
        // send post request with an {movie_id: movieDetailObj.id}
        
    }

    return (
        <div>
            <p>
            {movieDetailObj.title}
            <img src={movieDetailObj.img_url} alt="Movie Image" />
            </p>
            <button onClick={handleAddMovie}>ADD TO WATCHLIST</button>
        </div>
    );
}

export default MovieDetail;