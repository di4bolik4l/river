import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'



function Login({ onLogin }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	let navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		setIsLoading(true);
		fetch("/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		}).then((r) => {
			setIsLoading(false);
			if (r.ok) {
				r.json().then((user) => onLogin(user),
				navigate("/"));
			} else {
				r.json().then((err) =>{
					console.log(err);
					setErrors(err.errors)}
					);
			}
		});
	}

	return (
		<form  className="login-form" onSubmit={handleSubmit}>
			<div class="grid gap-6 mb-6 md:grid-cols-2">
				<div>
					<label for = "username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
					<input
						type="text"
						id="username"
						autoComplete="off"
						class = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder = "Username"
                        required
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div>
					<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
					<input
						type="password"
						id="password"
						autoComplete="current-password"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="•••••••••" 
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
			</div>
				<button variant="fill" color="primary" type="submit">
					{isLoading ? "Loading..." : "Login"}
				</button>

				{errors.map((err) => (
					<error key={err}>{err}</error>
				))}

		</form>
	);
}

export default Login;