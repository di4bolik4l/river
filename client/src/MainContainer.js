import React from 'react';
import MovieCard from './MovieCard';
import TvShowCard from './TvShowCard';
import AnimeCard from './AnimeCard';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function MainContainer({movie=[], tvShow=[], anime=[]}) {

    return (
        <div class="flex flex-row justify-center my-5 items-center space-between gap-20">
            <Carousel className="w-96">
                {movie.map((movieObj) => <MovieCard key={movieObj.id} movieObj={movieObj} />)}
            </Carousel>
            <Carousel className="w-96">
                {tvShow.map((tvObj) => <TvShowCard key={tvObj.id} tvObj={tvObj} />)}
            </Carousel>
            <Carousel className="w-96">
                {anime.map((animeObj) => <AnimeCard key={animeObj.id} animeObj={animeObj} />)}
            </Carousel>  
        </div>
    );
}

export default MainContainer;