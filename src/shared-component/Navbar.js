import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="navbar bg-base-100 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>Home</Link></li>
                        <li><Link>Courses</Link></li>
                        <li><Link>Blog</Link></li>
                    </ul>
                </div>
                <Link to='/home' className="btn btn-ghost normal-case text-xl">SKYTECH</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link>Dark Mode</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="tooltip tooltip-bottom mr-5" data-tip={user?.displayName}>
                    <img src={
                        user?.photoURL ?
                            <img style={{ borderRadius: '50%', }} src={user?.photoUrl} />
                            : <p>kk</p>
                    } />
                   
                </div>
                
                {
                                user?.uid ?
                                    <>
                                        
                                        <button className="btn btn-outline" onClick={handleLogOut}>Log out</button>
                                    </>
                                    :
                                    <>
                                        <Link className="btn btn-outline" to='/login'>Log In</Link>
                                       
                                    </>
                            }
            </div>
        </div>
    );
};

export default Navbar;