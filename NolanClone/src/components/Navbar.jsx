import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            
            <nav>
                <ul >
                    <li><Link to="/">Home</Link></li>
                    
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/script">Create Script</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <button><li><Link to="/login">Login</Link></li></button>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
