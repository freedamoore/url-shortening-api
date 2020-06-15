import React from 'react';
import './header.scss';

import CTAButton from '../cta-button/cta-button';
import headerImage from '../../assets/illustration-working.svg';

const Header = () => {
    return(
        <div className="header">
            <div className="header__img-section">
                <img src={headerImage} alt="illustration of someone working" className="header__img-section--img"></img>
            </div>    
            <div className="header__txt-section">
                <h1 className="header__txt-section--heading">More than just shorter links</h1>
                <p className="header__txt-section--text">Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <CTAButton>Get Started</CTAButton>
            </div>
        </div>
    );
}

export default Header;