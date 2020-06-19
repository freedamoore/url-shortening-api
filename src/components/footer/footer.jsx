import React from 'react';
import './footer.scss';

import facebook from '../../assets/icon-facebook.svg';
import twitter from '../../assets/icon-twitter.svg';
import pinterest from '../../assets/icon-pinterest.svg';
import instagram from '../../assets/icon-instagram.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__grid">
                <div className="footer__grid-item">
                    <h2 className="footer__heading">Shortly</h2>
                </div> 
                <div className="footer__grid-item">
                    <h3 className="footer__sub-heading">Features</h3>
                    <ul>
                        <li>Link Shortening</li>
                        <li>Branded Links</li>
                        <li>Analytics</li>
                    </ul>
                </div> 
                <div className="footer__grid-item">
                    <h3 className="footer__sub-heading">Resources</h3>
                    <ul>
                        <li>Blog</li>
                        <li>Developers</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className="footer__grid-item">
                    <h3 className="footer__sub-heading">Company</h3>
                    <ul>
                        <li>About</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer__grid-item footer__social">
                    <a href="https://www.facebook.com/"><img src={ facebook } alt="facebook__logo" className="footer__social--img"></img></a>
                    <a href="https://twitter.com/"><img src={ twitter } alt="twitter__logo" className="footer__social--img"></img></a>
                    <a href="https://www.pinterest.com.au/"><img src={ pinterest } alt="pinterest__logo" className="footer__social--img"></img></a>
                    <a href="https://www.instagram.com/"><img src={ instagram } alt="instagram__log" className="footer__social--img"></img></a>
 
                </div>
            </div>
            <div className="footer__attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="https://freedamoore.github.io/">Freeda Moore</a>.
            </div>
        </div>
    );
}

export default Footer;