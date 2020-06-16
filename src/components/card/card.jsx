import React from 'react';
import './card.scss';

const Card = ({heading, text, icon}) => {
    return(
        <div className="card">
            <div className="card__icon-border">
                <img className="card__icon" src={icon} alt=""/>
            </div>
            <h3 className="card__heading">{heading}</h3>
            <p className="card__text">{text}</p>
        </div>
    );
}

export default Card;