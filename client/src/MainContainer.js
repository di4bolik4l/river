import React from 'react';
import MovieCard from './MovieCard';
import { Alert } from 'flowbite-react';

function MainContainer({movie, setMovie}) {

    return (
        <div>
            {/* <div class="w-7/8 p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-gray-800 dark:text-blue-400" role="alert">
                <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
            </div>
            <Alert
                color="warning"
                rounded={false}
            >
                <span>
                    <span className="font-medium">
                    Info alert!
                    </span>
                {' '}Change a few things up and try submitting again.
                </span>
            </Alert> */}

            {movie.map((movieObj) => <MovieCard key={movieObj.id} movieObj={movieObj} />)}
        </div>
    );
}

export default MainContainer;