import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import Login from './Login';
import Logout from './Logout';
import Signup from './Signup';
import MovieDetail from './MovieDetail';
import TvShowDetail from './TvShowDetail';
import AnimeDetail from './AnimeDetail';
import Watchlist from './Watchlist';
import Profile from './Profile';
import {Route, Routes} from 'react-router-dom';
import {useState, useEffect} from 'react';


function App() {
	const [user, setUser] = useState(null);
	const [movie, setMovie] = useState([]);
	const [tvShow, setTvShow] = useState([]);
	const [anime, setAnime] = useState([]);
	const [update, setUpdate] = useState(true);

	useEffect(() => {
		async function fetchData() {
			const response1 = await fetch('/me');
			const userResponse = await response1.json();
			userResponse.error ? setUser(null) : setUser(userResponse);

			const response2 = await fetch('/movies');
			const movie = await response2.json();
			setMovie(movie);

			const response3 = await fetch('/tv_shows');
			const tvShow = await response3.json();
			setTvShow(tvShow);

			const response4 = await fetch('/animes');
			const anime = await response4.json();
			setAnime(anime);
		}

    fetchData();
	}, []);

	




	return (
		<div className="App">
			<NavBar user={user} setUser={setUser} />
			

			<Routes>
				<Route path="/" element={<Home  movie={movie} setMovie={setMovie} tvShow={tvShow} setTvShow={setTvShow} anime={anime} setAnime={setAnime} />} />
				<Route path="/signup" element={<Signup onSignUp={setUser}/>}/>
				<Route path="/login" element={<Login onLogin={setUser}/>}/>
				<Route path="/logout" element={<Logout user={user} setUser={setUser}/>}/>
				<Route path="/movies/:id" element={<MovieDetail user={user} />}/>
				<Route path="/tv_shows/:id" element={<TvShowDetail user={user} />}/>
				<Route path="/animes/:id" element={<AnimeDetail user={user} />}/>
				<Route path="/watchlist/:id" element={<Watchlist user={user} />}/> 
				{user ?
					<Route path="/profile/:id" element={<Profile user={user} setUser={setUser} update={update} setUpdate={setUpdate} />} />
					:
					<Route path="/profile/:id" element={<div className="alert">Please login or signup to view your profile</div>} />
				}
			</Routes>
		</div>
	);
}

export default App;

