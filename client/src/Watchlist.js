import WatchlistMovieCard from './WatchlistMovieCard.js';
import WatchlistTvShowCard from './WatchlistTvShowCard.js';
import WatchlistAnimeCard from './WatchlistAnimeCard.js';
import React from 'react';
import { useState, useEffect } from 'react';


function Watchlist({user}) {

    const [loggedInUserMovies, setLoggedInUserMovies] = useState([])
    const [loggedInUserTvShows, setLoggedInUserTvShows] = useState([])
    const [loggedInUserAnimes, setLoggedInUserAnimes] = useState([])

    console.log(loggedInUserAnimes)
    

    useEffect (() => {
        fetch('/watchlist_movies')
        .then(r => r.json())
        .then(userMoviesArray => {
            setLoggedInUserMovies(userMoviesArray)
        })
    }, [])

    useEffect (() => {
        fetch('/watchlist_tvshows')
        .then(r => r.json())
        .then(userTvShowsArray => {
            setLoggedInUserTvShows(userTvShowsArray)
        })
    }, [])

    useEffect (() => {
        fetch('/watchlist_animes')
        .then(r => r.json())
        .then(userAnimesArray => {
            setLoggedInUserAnimes(userAnimesArray)
        })
    }, [])


    return (
        <div>
            <div className="grid grid-cols-8">
            {loggedInUserMovies.map(watchListMovieObj => <WatchlistMovieCard key={watchListMovieObj.id} 
                                                                            watchListMovieObj={watchListMovieObj}
                                                                            loggedInUserMovies={loggedInUserMovies}
                                                                            setLoggedInUserMovies={setLoggedInUserMovies}
                                                                            />)}
            </div>
            <div className="grid grid-cols-8">
            {loggedInUserTvShows.map(watchListTvShowObj => <WatchlistTvShowCard key={watchListTvShowObj.id} 
                                                                            watchListTvShowObj={watchListTvShowObj}
                                                                            loggedInUserTvShows={loggedInUserTvShows}
                                                                            setLoggedInUserTvShows={setLoggedInUserTvShows}
                                                                            />)}
            </div>
            <div className="grid grid-cols-8">
            {loggedInUserAnimes.map(watchListAnimeObj => <WatchlistAnimeCard key={watchListAnimeObj.id} 
                                                                            watchListAnimeObj={watchListAnimeObj}
                                                                            loggedInUserAnimes={loggedInUserAnimes}
                                                                            setLoggedInUserAnimes={setLoggedInUserAnimes}
                                                                            />)}
            </div>
        </div>

    );
}

export default Watchlist;