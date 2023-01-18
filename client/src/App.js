import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import Login from './Login';
import Logout from './Logout';
import Signup from './Signup';
import MovieDetail from './MovieDetail';
import Watchlist from './Watchlist';
import {Route, Routes} from 'react-router-dom';
import {useState, useEffect} from 'react';


function App() {
	const [user, setUser] = useState(null);
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response1 = await fetch('/me');
			const user = await response1.json();
			setUser(user);
			const response2 = await fetch('/movies');
			const movie = await response2.json();
			setMovie(movie);
		}
    fetchData();
	}, []);

	




	return (
		<div className="App">
			<NavBar user={user} setUser={setUser} />
			{/* <div className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-gray-800 dark:text-blue-400" role="alert">
				<span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
			</div> */}

			<Routes>
				<Route exact path="/" element={<Home  movie={movie} setMovie={setMovie}/>} />
				<Route exact path="/signup" element={<Signup onSignUp={setUser}/>}/>
				<Route exact path="/login" element={<Login onLogin={setUser}/>}/>
				<Route path="/logout" element={<Logout user={user} setUser={setUser}/>}/>
				<Route path="/movies/:id" element={<MovieDetail user={user} />}/>
				<Route path="/watchlist/:id" element={<Watchlist user={user} />}/> 
			</Routes>
		</div>
	);
}

export default App;

