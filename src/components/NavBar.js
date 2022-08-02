import React from "react" 
import './navbar.css'
import logo from '../images/hiyalo-logo.png'

function NavBar() {

    return (
            <nav className="nav-bar">
                <div className="logo">
                    <img src={logo} alt="Logo"/>
                </div>
                <div className="hamburger">
                    <span className="iconify" data-icon="ci:menu-duo"></span>
                </div>
                {/* <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Listings</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul> */}

                <div className="subscribe-btn">
                    <button>Join Waiting List</button>
                </div>
            </nav>
    )
}

export default NavBar;