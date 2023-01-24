import React from 'react';
import {useNavigate} from 'react-router-dom'

function AnimeCard({animeObj}) {

    let navigate = useNavigate()

    const handleAddAnime = (e) => {
        console.log(":P")
        fetch('/watchlist_animes', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({anime_id: animeObj.id})
        })
        .then(r => r.json())
        .then(console.log)
    }

    return (
        
        <div className="">
            <div className="">
            
                <div className="flex flex-row space-between mx-4 mt-8">
                    <button className="flex-none text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleAddAnime}>ADD TO WATCHLIST</button>
                    <div className="grow"></div>
                    <button className="flex-none text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => navigate(`/animes/${animeObj.id}`)}>SEE MORE</button>
                </div>
                <img className="h-full cursor-pointer" src={animeObj.img_url} alt={animeObj.title} />
            </div>
        </div>
    );
}

export default AnimeCard;