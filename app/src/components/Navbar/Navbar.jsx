import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <div>
                <ul className="nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">SingUp</Link></li>        
                </ul>
            </div>  
        </div>
    )
}

const NavbarProfile = () => {
    return (
        <div>
            <div>
                <ul className="nav">
                    {/* <li><Link to="/">Pending Appointments</Link></li>
                    <li><Link to="/login">Schedule an appointment</Link></li> */}
                    <li><Link to="/">LogOut</Link></li>        
                </ul>
            </div>  
        </div>
    )
}



export {
    Navbar,
    NavbarProfile  
} 
