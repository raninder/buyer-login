import React from 'react';
import '../css/Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className="navbar-container">
                <div className="left-section">
                    <img src="/images/img.png" alt="Company Logo" className="logo" />
                </div>
                <div className="left-links">
                    <a className="nav-link" href="#">How it Works</a>
                    <a className="nav-link" href="#">Agents</a>
                    <a className="nav-link" href="#">About</a>
                    <a className="nav-link" href="#">Blog</a>
                    <a className="nav-link" href="#">Contact US</a>
                </div>
                <div className="right-section">
                    <button className="btn btn-signin">Sign In</button>
                    <button className="btn btn-getstarted">Get Started</button>
                </div>
            </div>
           
        </>
    );
}

export default Navbar;
