import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

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
console.log(errors)

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
    
    <form class="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
  
      
        <label htmlFor="password">Password</label>
        <input
          class="password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
  

        <label htmlFor="password_confirmation">Password Confirmation</label>
        <input
          class="password-confirmation"
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
    
        <label htmlFor="profile_pic">Profile Picture URL</label>
        <input
          class="profile-pic"
          type="text"
          id="profile_pic"
          value={profile_pic}
          onChange={(e) => setProfilePic(e.target.value)}
        />

        <label htmlFor="first_name">First Name:</label>
        <input
          class="first_name"
          type="text"
          id="first_name"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="last_name">Last Name:</label>
        <input
          class="last_name"
          type="text"
          id="last_name"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          class="email"
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
    

        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>

        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}

    </form>
  );
}

export default SignUp;