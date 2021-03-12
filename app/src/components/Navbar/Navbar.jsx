import React from 'react';
import {BrowserRouter,Switch, Route, Link} from 'react-router-dom';
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

export default Navbar
