import React from 'react';
import MainContainer from './MainContainer';

function Home({movie, setMovie, tvShow, setTvShow, anime, setAnime}) {
    return (
        <div>
            <MainContainer  movie={movie} 
                            setMovie={setMovie}
                            tvShow={tvShow}
                            setTvShow={setTvShow}
                            anime={anime}
                            setAnime={setAnime}
                            />
        </div>
    );
}

export default Home;