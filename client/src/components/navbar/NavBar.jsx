import React, { useContext } from 'react';
import "./navbar.css"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
const NavBar = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                    <span className="logo">lamabooking</span>
                </Link>
                {user ? user.username : (
                    <div className="navItems">
                        <Link to="/" className="navButton" style={{ color: "#003580", textDecoration: "none" }}>Register</Link>
                        <Link to="/login" className="navButton" style={{ color: "#003580", textDecoration: "none" }}>Login</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default NavBar;
