import React from 'react';
import {useState} from 'react';

function Profile({user, setUser, update, setUpdate}) {

    const [showForm, setShowForm] = useState(false)
    const [userName, setUserName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [profilePic, setProfilePic] = useState("")


    console.log(showForm)
    
    function handleToggle(e) {
        setShowForm(!showForm)

    }

    function handleFormSubmit(e) {
        e.preventDefault()
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(
                {
                    username: userName,
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    profile_pic: profilePic
                }
            )
        
        })
        .then(r => r.json())
        .then(console.log)
    }

    console.log(user)

    return (
        <div>
            <button onClick={handleToggle}>EDIT PROFILE</button>
            {showForm ? 
                <form onSubmit={handleFormSubmit}>
                    <label>Userame: </ label>
                    <input  type='text' name='username' 
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)} />
                    <br />
                    <label>First Name: </ label>
                    <input  type='text' name='first_name'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} />
                    <br />
                    <label>Last Name: </ label>
                    <input  type='text' name='last_name' 
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)} />
                    <br />
                    <label>Email: </ label>
                    <input  type='text' name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/> 
                    <br />
                    <label>Profile Picture: </ label>
                    <input  type='text' name='profile_pic' 
                            value={profilePic}
                            onChange={(e) => setProfilePic(e.target.value)}/>
                    <br />
                    <button type='submit'>SUBMIT</button>
                </form>
            : 
            <>
            </>
            }
        </div>
    );
}

export default Profile;