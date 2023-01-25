import React from 'react';
import {NavLink} from 'react-router-dom';
import logo_image from './RiverCombined.png';


function NavBar({user}) {

    return (

        <nav className="bg-gray-900 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 w-full">
            <div className="flex flex-wrap items-center justify-between">
                <NavLink to='/' className="flex items-center">
                        <img src = {logo_image} className="h-6 mr-1 md:h-12" alt="River Logo" />
                </NavLink>
                {/* <NavLink to='search'>Search</NavLink> */}
                {user ?
                    <div className="items-center hidden w-full md:flex md:w-auto md:order-1">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                {/* <NavLink to='/movies'>Movies</NavLink> */}
                            </li>
                            <li className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                <NavLink to={`/watchlist/${user.id}`}>Watchlist</NavLink>
                            </li>
                            <li className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                <NavLink to='/logout'>Logout</NavLink>
                            </li>
                            <li className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                <NavLink to={`/profile/${user.id}`}>
                                    <img src={user.profile_pic} className="w-8 h-8 rounded-full" alt="Profile Pic"/>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                :
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            <NavLink className="navlink" to="/login">Login</NavLink>
                        </li>
                        <li className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            <NavLink className="navlink" to="/signup">Sign Up</NavLink>
                        </li>
                    </ul>
                </div>
                }    
            </div>
        </nav>
    )
}

export default NavBar;