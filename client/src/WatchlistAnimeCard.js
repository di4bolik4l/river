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
        
        <div className="flex flex-wrap gap-2">
            <Link to={`/animes/${watchListAnimeObj.anime.id}`}>
                <img className="anime-image" src={watchListAnimeObj.anime.img_url} alt={watchListAnimeObj.title} />
            </Link>
            <button onClick={handleRemoveAnime}>REMOVE</button>
        </div>

    );
}

export default WatchlistAnimeCard;