import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetail({user}) {

    const {id} = useParams();

    const [movieDetailObj, setMovieDetailObj] = useState([]);
    
    useEffect(() => {
        fetch(`/movies/${id}`)
        .then(response => response.json())
        .then(data => 
            setMovieDetailObj(data))
    },[id])

    console.log(movieDetailObj)
    
    const handleAddMovie = (e) => {
        fetch('/watchlist_movies', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({movie_id: movieDetailObj.id})
        })
        .then(r => r.json())
        .then(console.log)
        
    }

    return (
        <div>
            <div class="grid grid-cols-2 gap">
                <p class="">
                    <h2 class="mb-4 text-2xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-violet-800">{movieDetailObj.title}</span></h2>
                    <img class="h-auto max-w-lg" src={movieDetailObj.img_url} alt={movieDetailObj.title} />
                </p>
                <div class="md:container md:mx-auto tracking-normal my-10">
                    <ul class="mb-3 text-lg font-semibold text-gray-900 md:text-xl">
                        Genre:
                        <li class="mb-3 text-lg font-semibold text-pink-800 md:text-xl">{movieDetailObj.genre}</li>
                        <br />
                        Director:
                        <li class="mb-3 text-lg font-semibold text-pink-800 md:text-xl">{movieDetailObj.director}</li>
                        <br />
                        <ul class="mb-3 text-lg font-semibold text-gray-900 md:text-xl">
                            Cast:
                            <li class="mb-3 text-lg font-semibold text-pink-800 md:text-xl">{movieDetailObj.cast_member_1}</li>
                            <li class="mb-3 text-lg font-semibold text-pink-800 md:text-xl">{movieDetailObj.cast_member_2}</li>
                            <li class="mb-3 text-lg font-semibold text-pink-800 md:text-xl">{movieDetailObj.cast_member_3}</li>
                        </ul>
                        <br />
                        <ul class="mb-3 text-lg font-semibold text-gray-900 md:text-xl">{'Watch Here: '}
                            {movieDetailObj.netflix ? <a class="mb-3 text-lg font-semibold text-red-700 md:text-xl" href={movieDetailObj.netflix}>Netflix </a> : null}
                            {movieDetailObj.prime ? <a class="mb-3 text-lg font-semibold text-blue-500 md:text-xl" href={movieDetailObj.prime}>Amazon Prime </a> : null}
                            {movieDetailObj.hulu ? <a class="mb-3 text-lg font-semibold text-green-600 md:text-xl" href={movieDetailObj.hulu}>Hulu </a> : null}
                            {movieDetailObj.crunchyroll ? <a class="mb-3 text-lg font-semibold text-yellow-600 md:text-xl" href={movieDetailObj.crunchyroll}>Crunchyroll </a> : null}
                        </ul>
                    </ul>
                    <blockquote class="text-xl italic font-semibold text-gray-900">
                        <svg aria-hidden="true" class="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
                        <p>{movieDetailObj.description}</p>
                    </blockquote>
                </div>

            </div>
            <div className="flex flex-col items-center pb-10">
                <button className="flex-none text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleAddMovie}>ADD TO WATCHLIST</button>
            </div>
        </div>
        
    );
}

export default MovieDetail;