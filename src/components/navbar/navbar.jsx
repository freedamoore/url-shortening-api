import React from 'react';
import './navbar.scss';
import logo from '../../assets/logo.svg';

const Navbar = () => {
    return(
        <header className="navigation">         
         
            <img src={logo} alt="logo" className="navigation__logo"></img>
            
            <div className="navigation__dropdown">

                <label htmlFor="nav-show-menu" className="navigation__menu-toggle"><span className="fa fa-bars"></span></label>
                <input type="checkbox" id="nav-show-menu" className="navigation__checkbox" role="button" />

                <nav className="navigation__main-menu">

                    <ul className="navigation__main-menu--1">
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Resources</a></li>
                    </ul>

                    <ul className="navigation__main-menu--2">
                        <li><a href="#">Login</a></li>
                        <li><a href="#" id="signup-btn">Sign Up</a></li>
                    </ul>

                </nav>

            </div>
        </header>
    );
}

export default Navbar;