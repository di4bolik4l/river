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
        .then((patchedUser) => {
            console.log(patchedUser)
            setUser(patchedUser)
        })
    }

    console.log(user)

    return (
        <div>
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user.profile_pic} alt={user.username}/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.first_name} {user.last_name}</h5>
                <span className="text-lg text-violet-800 dark:text-gray-400">{user.username}</span>
                <span className="text-lg text-violet-800 dark:text-gray-400">{user.email}</span>
            </div>
                
            <div className="flex flex-col items-center pb-10">
                <button className="flex-none text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleToggle}>EDIT PROFILE</button>
                {showForm ? 
                    <form onSubmit={handleFormSubmit}>
                        <div class="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label for = "first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name: </ label>
                                <input  type = "text" 
                                        id = "first_name" 
                                        class = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        placeholder="John/Jane" 
                                        required
                                        value = {firstName}
                                        onChange = {(e) => setFirstName(e.target.value)} />
                            </div>
                            <div>
                                <label for = "last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name: </ label>
                                <input  type = "text" 
                                        id = "last_name"
                                        class = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder = "Doe"
                                        required
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            <div>
                                <label for = "username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Userame: </ label>
                                <input  type= "text"
                                        id = "username"
                                        class = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder = "Username"
                                        required
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)} />
                            </div>
                            <div>
                                <label for = "Email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email: </ label>
                                <input  type = "text"
                                        id ="email"
                                        class = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder = "Email Address"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}/> 
                            </div>
                        </div>
                        <div class="mb-6">
                            <div>
                                <label for = "profile-pic" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Picture: </ label>
                                <input  type = "text" 
                                        id = "profile_pic"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder = "Profile Picture URL"
                                        required
                                        value={profilePic}
                                        onChange={(e) => setProfilePic(e.target.value)}/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center pb-10">
                            <button className="flex-none text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type='submit'>SUBMIT</button>
                        </div>
                    </form>
                : 
                <>
                </>
                }
            </div>
        </div>
    );
}

export default Profile;