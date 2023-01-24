import React from 'react';
import { Link } from "react-router-dom";

function WatchlistTvShowCard({watchListTvShowObj, loggedInUserTvShows, setLoggedInUserTvShows}) {

    const handleRemoveTvShow = (e) => {

        fetch(`/watchlist_tvshows/${watchListTvShowObj.id}`, {
            method: 'DELETE',
            headers: {"Content-Type" : "application/json"}
        })

        const filterResult = loggedInUserTvShows.filter(wtvobj => {
            console.log(wtvobj.id, watchListTvShowObj.id)
            if(wtvobj.id !== watchListTvShowObj.id) {
                return (
                    wtvobj
                )
            }
        })
        setLoggedInUserTvShows([...filterResult])
    }

    return (
        
        <div className="flex flex-wrap gap-2">
            <Link to={`/tv_shows/${watchListTvShowObj.tv_show.id}`}>
                <img className="tv-show-image" src={watchListTvShowObj.tv_show.img_url} alt={watchListTvShowObj.title} />
            </Link>
            <button onClick={handleRemoveTvShow}>REMOVE</button>
        </div>

    );
}

export default WatchlistTvShowCard;