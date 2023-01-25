import React from 'react';
import { useNavigate } from 'react-router-dom'
import logo_image from './RiverCombined2.png';

function Logout({user, setUser}) {
    let navigate = useNavigate()

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
            setUser(null);
            navigate("/")
        }
        });
    }

    console.log(user)
    return (
        <div className="logout flex flex-col items-center pb-10">
            <img src={logo_image} alt="logo"/>
            <h1 className="mb-3 text-lg font-semibold text-pink-800 md:text-xl">Are you sure you want to log out?</h1>
            <button className="logout-button flex-none text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 my-5" onClick={handleLogoutClick}>Log Out</button>
        </div>
    );
}

export default Logout;