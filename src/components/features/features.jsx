import React from 'react';
import './features.scss';
import Card from '../card/card';
import brandIcon from '../../assets/icon-brand-recognition.svg';
import detailedIcon from '../../assets/icon-detailed-records.svg';
import customizableIcon from '../../assets/icon-fully-customizable.svg';

const Features = () => {
    const brandTxt = "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.";
    const detailedTxt = "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.";
    const customizableTxt = "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.";
   
    return (
        <div className="features">
            <h2 className="features__heading">Advanced Statistics</h2>
            <p className="features__text">Track how your links are performing across the web with our advanced statistics dashboard.</p>
            
            <div className="features__cards">
                {/* <hr className="features__line"/> */}
                <Card heading="Brand Recognition" text={brandTxt} icon={brandIcon} /> 
                <Card heading="Detailed Records" text={detailedTxt} icon={detailedIcon} />
                <Card heading="Fully Customizable" text={customizableTxt} icon={customizableIcon} />
            </div>
        </div>
    );
}

export default Features;