import React from 'react';
import './cta.scss';
import CTAButton from '../cta-button/cta-button';

const CTA = () => {
    return (
        <div className="cta">
            <h2 className="cta__heading">Boost your links today</h2>
            <CTAButton>Get Started</CTAButton>
        </div>
    );
}

export default CTA;