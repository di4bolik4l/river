import React from 'react';
import {useNavigate} from 'react-router-dom'


function TvShowCard({tvObj}) {

    let navigate = useNavigate()

    const handleAddTvShow = (e) => {
        console.log(":P")
        fetch('/watchlist_tvshows', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({tv_show_id: tvObj.id})
        })
        .then(r => r.json())
        .then(console.log)
    }

    return (
        
        <div className="">
            <div className="">
                <div className="flex flex-row space-between mx-4 mt-8">
                    <button className="flex-none text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleAddTvShow}>ADD TO WATCHLIST</button>
                    <div className="grow"></div>
                    <button className="flex-none text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => navigate(`/tv_shows/${tvObj.id}`)}>SEE MORE</button>
                </div>
                <img className="h-full cursor-pointer" src={tvObj.img_url} alt={tvObj.title} />
            </div>
    </div>
    );
}

export default TvShowCard;