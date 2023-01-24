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
        <div class="grid grid-cols-2 gap">
            <p class="">
                <h2 class="mb-4 text-2xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-violet-800">{movieDetailObj.title}</span></h2>
                <img class="h-auto max-w-lg" src={movieDetailObj.img_url} alt={movieDetailObj.title} />
            </p>
            <div class="md:container md:mx-auto text-purple-800 tracking-normal">
                <ul>
                    <li>Genre: {movieDetailObj.genre}</li>
                    <br />
                    <li>Director: {movieDetailObj.director}</li>
                    <ul>
                        Cast:
                        <li>{movieDetailObj.cast_member_1}</li>
                        <li>{movieDetailObj.cast_member_2}</li>
                        <li>{movieDetailObj.cast_member_3}</li>
                    </ul>
                    <br />
                    <ul>{'Watch Here: '}
                        {movieDetailObj.netflix ? <a href={movieDetailObj.netflix}>Netflix </a> : null}
                        {movieDetailObj.prime ? <a href={movieDetailObj.prime}>Amazon Prime </a> : null}
                        {movieDetailObj.hulu ? <a href={movieDetailObj.hulu}>Hulu </a> : null}
                        {movieDetailObj.crunchyroll ? <a href={movieDetailObj.cruncyroll}>Cruncyroll </a> : null}
                    </ul>
                </ul>
                <blockquote class="text-xl italic font-semibold text-gray-900">
                    <svg aria-hidden="true" class="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
                    <p>{movieDetailObj.description}</p>
                </blockquote>
                {/* <button className="flex-none text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleAddMovie}>ADD TO WATCHLIST</button> */}
            </div> 
            <div>
                <button className="flex-none text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleAddMovie}>ADD TO WATCHLIST</button>
            </div>
        </div>
        
    );
}

export default MovieDetail;