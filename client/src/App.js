import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import Login from './Login';
import Logout from './Logout';
import Signup from './Signup';
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
			// fetch('/movies')
		}
	// .then(r => r.json())
	// .then(data => console.log(data))
    fetchData();
	}, []);

	console.log(movie)
	// useEffect (() => {
	// }, [])

	




	return (
		<div className="App">
			<NavBar user={user} setUser={setUser} />

			"Hello World!"
			<Routes>
				<Route exact path="/" element={<Home  movie={movie} setMovie={setMovie}/>} />
				<Route exact path="/signup" element={<Signup onSignUp={setUser}/>}/>
				<Route exact path="/login" element={<Login onLogin={setUser}/>}/>
				<Route path="/logout" element={<Logout user={user} setUser = {setUser}/>}/>
			</Routes>
		</div>
	);
}

export default App;

