import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function AnimeDetail({user}) {

    const {id} = useParams();

    const [animeDetailObj, setAnimeDetailObj] = useState([]);
    
    useEffect(() => {
        fetch(`/animes/${id}`)
        .then(response => response.json())
        .then(data => 
            setAnimeDetailObj(data))
    },[id])

    console.log(animeDetailObj)
    
    const handleAddAnime = (e) => {
        fetch('/watchlist_animes', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({anime_id: animeDetailObj.id})
        })
        .then(r => r.json())
        .then(console.log)
        
    }

    return (
        <div>
            <div class="grid grid-cols-2 gap-2">
                <p>
                    <h2 class="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-violet-800">{animeDetailObj.title}</span></h2>
                    <img class="h-auto max-w-lg" src={animeDetailObj.img_url} alt={animeDetailObj.title} />
                </p>
                <div class="md:container md:mx-auto tracking-normal my-10">
                <ul class="mb-3 text-lg font-semibold text-gray-900 md:text-xl">
                    <ul>{'Watch Here: '}
                        {animeDetailObj.netflix ? <a class="mb-3 text-lg font-semibold text-red-700 md:text-xl" href={animeDetailObj.netflix}>Netflix </a> : null}
                        {animeDetailObj.prime ? <a class="mb-3 text-lg font-semibold text-blue-500 md:text-xl" href={animeDetailObj.prime}>Amazon Prime </a> : null}
                        {animeDetailObj.hulu ? <a class="mb-3 text-lg font-semibold text-green-600 md:text-xl" href={animeDetailObj.hulu}>Hulu </a> : null}
                        {animeDetailObj.crunchyroll ? <a class="mb-3 text-lg font-semibold text-yellow-600 md:text-xl" href={animeDetailObj.crunchyroll}>Crunchyroll </a> : null}
                    </ul>
                </ul>
                    <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
                        <svg aria-hidden="true" class="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
                        <p>{animeDetailObj.description}</p>
                    </blockquote>
                </div>
            
            </div>
            <div className="flex flex-col items-center pb-10">
                <button className="flex-none text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleAddAnime}>ADD TO WATCHLIST</button>
            </div>
        </div>
    );
}


export default AnimeDetail;