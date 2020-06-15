import React from 'react';
import './form-button.scss';

const FormBtn = ({btnText}) => {
    return(
        <button className="form-button">{btnText}</button>
    );
}

export default FormBtn;