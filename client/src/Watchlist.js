import WatchlistMovieCard from './WatchlistMovieCard.js';
import React from 'react';
import { useState, useEffect } from 'react';


function Watchlist({user}) {

    const [loggedInUserMovies, setLoggedInUserMovies] = useState([])
    // console.log(loggedInUserMovies)
    

    useEffect (() => {
        fetch('/watchlist_movies')
        .then(r => r.json())
        .then(userMoviesArray => {
            setLoggedInUserMovies(userMoviesArray)
        })
    }, [])


    return (
        <div>
            {loggedInUserMovies.map(watchListMovieObj => <WatchlistMovieCard key={watchListMovieObj.id} 
                                                                            watchListMovieObj={watchListMovieObj}
                                                                            loggedInUserMovies={loggedInUserMovies}
                                                                            setLoggedInUserMovies={setLoggedInUserMovies}
                                                                            />)}
        </div>
    );
}

export default Watchlist;