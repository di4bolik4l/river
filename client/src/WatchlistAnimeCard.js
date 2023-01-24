import React from 'react';
import { Link } from "react-router-dom";

function WatchlistAnimeCard({watchListAnimeObj, loggedInUserAnimes, setLoggedInUserAnimes}) {
    
    const handleRemoveAnime = (e) => {

        fetch(`/watchlist_animes/${watchListAnimeObj.id}`, {
            method: 'DELETE',
            headers: {"Content-Type" : "application/json"}
        })

        const filterResult = loggedInUserAnimes.filter(waobj => {
            console.log(waobj.id, watchListAnimeObj.id)
            if(waobj.id !== watchListAnimeObj.id) {
                return (
                    waobj
                )
            }
        })
        setLoggedInUserAnimes([...filterResult])
    }

    return (
        <div className="flex w-7/8 my-5">
            <div className="flex flex-col gap-2">
                <Link to={`/animes/${watchListAnimeObj.anime.id}`}>
                    <img className="anime-image" src={watchListAnimeObj.anime.img_url} alt={watchListAnimeObj.title} />
                </Link>
                <button class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleRemoveAnime}>REMOVE</button>
            </div>
        </div>

    );
}

export default WatchlistAnimeCard;