import React from 'react';
import '../css/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../assets/icons/logo.png";
import "./Navbar.css"
import test from "../assets/images/notification-test.png"
import { Divider, Popover, Button } from '@mui/material';
import { messaging } from '../firebase';


const data = [
    {
        title: "Price Drop",
        time: "3h",
        address: "1234 Main Street",
        properties: ["$315k", "3beds", "3ba", "1986 sqft"]
    },
    {
        title: "New listing",
        time: "3h",
        address: "1234 Main Street",
        properties: ["$315k", "3beds", "3ba", "1986 sqft"]
    },
    {
        title: "New Tour",
        time: "3h",
        address: "1234 Main Street",
        properties: ["$315k", "3beds", "3ba", "1986 sqft"]
    },
    {
        title: "Sold!",
        time: "3h",
        address: "1234 Main Street",
        properties: ["$315k", "3beds", "3ba", "1986 sqft"]
    },
    {
        title: "Price Drop",
        time: "3h",
        address: "1234 Main Street",
        properties: ["$315k", "3beds", "3ba", "1986 sqft"]
    },
    {
        title: "Price Drop",
        time: "3h",
        address: "1234 Main Street",
        properties: ["$315k", "3beds", "3ba", "1986 sqft"]
    },
    {
        title: "New listing",
        time: "3h",
        address: "1234 Main Street",
        properties: ["$315k", "3beds", "3ba", "1986 sqft"]
    },
    {
        title: "New Tour",
        time: "3h",
        address: "1234 Main Street",
        properties: ["$315k", "3beds", "3ba", "1986 sqft"]
    },
    {
        title: "Sold!",
        time: "3h",
        address: "1234 Main Street",
        properties: ["$315k", "3beds", "3ba", "1986 sqft"]
    },
    {
        title: "Price Drop",
        time: "3h",
        address: "1234 Main Street",
        properties: ["$315k", "3beds", "3ba", "1986 sqft"]
    },
]

const NotificationItem = ({ item }) => {
    return (
        <div className='notification-item'>
            <div className='notification-item-left-column'>
                <div className='notification-item-left-first'>
                    <div className='notification-item-left-first-title'>
                        {item.title}
                    </div>
                    <div className='notification-item-left-first-time'>
                        {item.time}
                    </div>
                </div>
                <div className='notification-item-left-second'>
                    Your {item.address}saved home.
                </div>
                <div className='notification-item-left-third'>
                    {item.properties.map((property, index) => {
                        return (
                            <span key={index}>
                                {property}
                                {index !== item.properties.length - 1 ? '  |  ' : ''}
                            </span>)
                    })}
                </div>
            </div>
            <div className='notification-item-right-column'>
                <div className='notification-item-picture-container'>
                    <img src={test} alt='item'></img>
                </div>
            </div>
        </div>
    )
}

const NotificationContent = ({ data }) => {
    return (
        <>
            <div className='notification-title'>
                Notifications
            </div>
            <Divider sx={{ background: "#000" }} />
            <div className='notification-items-container'>
                {data.map((item, key) => (
                    <>
                        <NotificationItem item={item} />
                        {key !== data.length - 1 ? <Divider /> : null}
                    </>))}
            </div>
        </>
    )
}

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const id = open ? 'simple-popover' : undefined;


    const navigate = useNavigate();
    const goToPage = (page) => {
        navigate(page);
    };


    return (
        <div className="navbar-container">
            <div className="left-section">
                <img src={Logo} alt="Company Logo" className="logo" />
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    sx={{ height: "60vh" }}>
                    <NotificationContent data={data}></NotificationContent>
                </Popover>
                {/* <NotificationContent data={data}></NotificationContent> */}
            </div>
            <Button onClick={handleClick}>I'm a bell Icon</Button>
            <div className="left-links">
                <a className="nav-link" onClick={() => goToPage('/howitworks')}>How it Works</a>
                <a className="nav-link" onClick={() => goToPage('/agents')}>Agents</a>
                <a className="nav-link" onClick={() => goToPage('/aboutus')}>About</a>
                <a className="nav-link" onClick={() => goToPage('/blog')}>Blog</a>
                <a className="nav-link" onClick={() => goToPage('/contactus')}>Contact Us</a>
            </div>
            <div className="right-section">
                <Link to='/signin'><button className="btn btn-signin">Sign In</button></Link>
                <Link to='/proplist'><button className="btn btn-getstarted">Get Started</button></Link>
            </div>
        </div>
    );
}

export default Navbar;
