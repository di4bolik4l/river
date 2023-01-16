import React from 'react';
import MainContainer from './MainContainer';

function Home({movie, setMovie}) {
    return (
        <div>
            <MainContainer movie={movie} setMovie={setMovie} />
        </div>
    );
}

export default Home;