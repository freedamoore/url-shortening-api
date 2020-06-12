import React from 'react';
import './navbar.scss';

const Navbar = () => {
    return(
        <header className="navigation">

            <h1 className="navigation__logo">Shortly</h1>   
            
            <div className="navigation__dropdown">

                <label for="nav-show-menu" className="navigation__menu-toggle"><span class="fa fa-bars"></span></label>
                <input type="checkbox" id="nav-show-menu" className="navigation__checkbox" role="button" />

                <nav className="navigation__main-menu">

                    <ul className="navigation__main-menu--1">
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Resources</a></li>
                    </ul>

                    <ul className="navigation__main-menu--2">
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Sign Up</a></li>
                    </ul>

                </nav>

            </div>
        </header>
    );
}

export default Navbar;