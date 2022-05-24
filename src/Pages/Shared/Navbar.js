import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    const menuItems = <>
        <li><Link to="/home">Home</Link></li>
        {user && <li><Link to="/dashboard">Dashboard</Link></li>}
        {user ? <li><button onClick={handleSignOut}>SignOut</button></li> : <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
        </>}
    </>

    return (
        <div class="navbar bg-primary text-secondary">
            <div className='w-full lg:w-11/12 mx-auto'>
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabIndex="0" class="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' class="normal-case text-2xl font-bold">BIKE PARTS</Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 text-xl">
                        {menuItems}
                    </ul>
                </div>
                {
                    user && <div className='navbar-end'>
                        <label htmlFor="dashboard-drawer" tabIndex="1" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;