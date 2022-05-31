import React from 'react';
import "./navbar.css"
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" className="logo">VacaBook</Link>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
