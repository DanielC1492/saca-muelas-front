import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navContainer">         
            <ul className="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Sign   Up</Link></li>        
            </ul>
        </div>
    )
}

const NavbarProfile = () => {
    return (
        <div className="navProfileContainer">
            <ul className="navProfile">
                <li><Link to="/appointment">Pending Appointments</Link></li>
                <li><Link to="/schedule">Schedule an appointment</Link></li>
                <li><Link to="/">LogOut</Link></li>        
            </ul>  
        </div>
    )
}


export {
    Navbar,
    NavbarProfile  
} 
