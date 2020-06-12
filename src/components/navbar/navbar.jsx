import React from 'react';
import './navbar.scss';

const Navbar = () => {
    return(
        <header className="nav">
            <h1 class="logo">Shortly</h1>
            <a href="#main-menu" id="main-menu-toggle"class="menu-toggle" aria-label="Open main menu">
                <span class="sr-only">Open main menu</span>
                <span class="fa fa-bars" aria-hidden="true"></span>
            </a>          
            
            <nav id="main-menu" class="main-menu" aria-label="Main menu">
                <a href="#main-menu-toggle" id="main-menu-close" class="menu-close" aria-label="Close main menu">
                <span class="sr-only">Close main menu</span>
                <span class="fa fa-close" aria-hidden="true"></span>
                </a>
                <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Resources</a></li>
                </ul>
                <ul>
                <li><a href="#">Login</a></li>
                <li><a href="#">Sign Up</a></li>
                </ul>
            </nav>
            {/* <a href="#main-menu-toggle" class="backdrop" tabindex="-1" aria-hidden="true" hidden></a> */}
        </header>
    );
}

export default Navbar;