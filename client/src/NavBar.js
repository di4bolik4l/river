import React from 'react';
import {NavLink} from 'react-router-dom';
import logo_image from './RiverLogo.png';
// import { useState } from 'react';


function NavBar({user}) {

  // const [loggedIn, setLoggedIn] = useState(false);


    return (

        <nav>
            <div>
                <NavLink to='/' >
                    <img src = {logo_image} alt="River Logo" />
                </NavLink>
                <NavLink to='search'>Search</NavLink>
                {user ?
                <>
                <NavLink to='/movies'>Movies</NavLink>
                <NavLink to={`/watchlist/${user.id}`}>Watchlist</NavLink>
                <NavLink to='/logout'>Logout</NavLink>
                </> :
                <>
                    <NavLink className="navlink" to="/login">Login</NavLink>
                    <NavLink className="navlink" to="/signup">Sign Up</NavLink>
                </>
                }    
            </div>
        </nav>
    )
}

export default NavBar;