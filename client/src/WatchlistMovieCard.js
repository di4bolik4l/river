import React from 'react';
import { Link } from "react-router-dom";



function WatchlistMovieCard({watchListMovieObj, loggedInUserMovies, setLoggedInUserMovies}) {
    console.log(watchListMovieObj.movie.id)
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
        <div className="flex w-7/8">
            <div className="flex flex-col gap-2">
                <Link to={`/movies/${watchListMovieObj.movie.id}`}>
                    <img className="movie-image" src={watchListMovieObj.movie.img_url} alt={watchListMovieObj.title} />
                </Link>
                <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleRemoveMovie}>REMOVE</button>
            </div>
        </div>
    );
}

export default WatchlistMovieCard;