import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import logo_image from './RiverCombined2.png';

function SignUp({onSignUp}) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const [profile_pic, setProfilePic] = useState("");
	const [email, setEmail] = useState("");
	const [first_name, setFirstName] = useState("");
	const [last_name, setLastName] = useState("")
	const [errors, setErrors] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
// console.log(errors)

let navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		setErrors([]);
		setIsLoading(true);
		fetch("/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username,
				password,
				password_confirmation: passwordConfirmation,
				profile_pic: profile_pic,
				email

			}),
		}).then((r) => {
			setIsLoading(false);
			if (r.ok) {
				r.json().then((user) => onSignUp(user),
				navigate('/'));
			} else {
				r.json().then((err) => {
					console.log(err)
					setErrors(err.errors) 
					
				});
				
			
			}
		});
	}

	return (
		<div className="flex flex-col items-center pb-10">
			<img src={logo_image} />
			<form className="signup-form" onSubmit={handleSubmit}>
				<div class="grid gap-6 mb-6 md:grid-cols-2">
					<div>
						<label for = "username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username: </label>
						<input
							type="text"
							id="username"
							class = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							autoComplete="off"
							placeholder = "Username"
							required
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div>
						<label for = "Email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email:</label>
						<input
							type="text"
							id="email"
							class = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							autoComplete="off"
							placeholder = "Email Address"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div>
						<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password: </label>
						<input
							type="password"
							id="password"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="•••••••••" 
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							autoComplete="current-password"
						/>
					</div>
					<div>
						<label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password Confirmation: </label>
						<input
							type="password"
							id="password_confirmation"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="•••••••••" 
							required
							value={passwordConfirmation}
							onChange={(e) => setPasswordConfirmation(e.target.value)}
							autoComplete="current-password"
						/>
					</div>
					<div>
						<label for = "first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name:</label>
						<input
							type="text"
							id="first_name"
							class = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder = "First Name"
							required
							value={first_name}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div>
						<label for = "last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name:</label>
						<input
							type="text"
							id="last_name"
							class = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder = "Last Name"
							required
							value={last_name}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
				</div>
				<div class="mb-6">
					<div>
						<label for = "profile-pic" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Picture URL: </label>
						<input
							type="text"
							id="profile_pic"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder = "Profile Picture URL"
							required
							value={profile_pic}
							onChange={(e) => setProfilePic(e.target.value)}
						/>
					</div>
				</div>
				<div className="flex flex-col items-center pb-10">
					<button className="flex-none text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>

					{errors.map((err) => (
						<error key={err}>{err}</error>
					))}
				</div>
			</form>
		</div>
	);
}

export default SignUp;