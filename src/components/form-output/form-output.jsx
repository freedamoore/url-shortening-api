import React from 'react';
import './form-output.scss';
import FormBtn from '../form-button/form-button';

const FormOutput = ({inputUrl, shortUrl}) => {
    return (
        <div className="form-output">
            <p className="form-output__inputURL">{inputUrl}</p>
            <p className="form-output__shortURL">{shortUrl}</p>
           <FormBtn btnText="Copy" />
        </div>
    );
}

export default FormOutput;