import React from 'react';
import '../css/Navbar.css';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();

    const goToPage = (page) => {
    navigate(page);
    };
    return (
        <>
            <div className="navbar-container">
                <div className="left-section">
                    <img src="/images/img.png" alt="Company Logo" className="logo" />
                </div>
                <div className="left-links">
                    <a className="nav-link" onClick={() => goToPage('/form1')}>How it Works</a>
                    <a className="nav-link" onClick={() => goToPage('/agents')}>Agents</a>
                    <a className="nav-link" onClick={() => goToPage('/Article')}>About</a>
                    <a className="nav-link" onClick={() => goToPage('/blog')}>Blog</a>
                    <a className="nav-link" onClick={() => goToPage('/contactus')}>Contact US</a>
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
