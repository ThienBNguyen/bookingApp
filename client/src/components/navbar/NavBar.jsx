import React, { useContext } from 'react';
import "./navbar.css"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
const NavBar = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" className="logo">VacaBook</Link>
                {user ? user.username : (<div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>)}
            </div>
        </div>
    );
}

export default NavBar;
