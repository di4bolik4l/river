import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function TvShowDetail({user}) {

    const {id} = useParams();

    const [tvDetailObj, setTvDetailObj] = useState([]);
    
    useEffect(() => {
        fetch(`/tv_shows/${id}`)
        .then(response => response.json())
        .then(data => 
            setTvDetailObj(data))
    },[id])

    console.log(tvDetailObj)
    
    const handleAddTvShow = (e) => {
        fetch('/watchlist_tvshows', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({tv_show_id: tvDetailObj.id})
        })
        .then(r => r.json())
        .then(console.log)
        
    }

    return (
        <div class="grid grid-cols-2 gap-2">
            <p>
                <h2 class="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-violet-800">{tvDetailObj.title}</span></h2>
                <img class="h-auto max-w-lg" src={tvDetailObj.img_url} alt={tvDetailObj.title} />
            </p>
            <div class="md:container md:mx-auto text-purple-800 tracking-normal">
                <ul>
                    <li>Genre: {tvDetailObj.genre}</li>
                    <br />
                    <ul>
                        Cast:
                        <li>{tvDetailObj.cast_member_1}</li>
                        <li>{tvDetailObj.cast_member_2}</li>
                        <li>{tvDetailObj.cast_member_3}</li>
                    </ul>
                    <br />
                    <ul>{'Watch Here: '}
                        {tvDetailObj.netflix ? <a href={tvDetailObj.netflix}>Netflix </a> : null}
                        {tvDetailObj.prime ? <a href={tvDetailObj.prime}>Amazon Prime </a> : null}
                        {tvDetailObj.hulu ? <a href={tvDetailObj.hulu}>Hulu </a> : null}
                        {tvDetailObj.crunchyroll ? <a href={tvDetailObj.cruncyroll}>Cruncyroll </a> : null}
                    </ul>
                </ul>
                <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
                    <svg aria-hidden="true" class="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
                    <p>{tvDetailObj.description}</p>
                </blockquote>
            </div>
            

            <button className="flex-none text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleAddTvShow}>ADD TO WATCHLIST</button>
        </div>
    );
}

export default TvShowDetail;