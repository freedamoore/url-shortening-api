import React from 'react';
import './form-output.scss';

const FormOutput = ({inputUrl, shortUrl}) => {

    const copyShortUrl = () =>{
        const copyText = document.querySelector("#shortUrl").textContent;
        navigator.clipboard.writeText(copyText);
        const copyBtn = document.querySelector(".form-output__btn");
        copyBtn.textContent = "Copied!";
        copyBtn.style.background='var(--color-primary-2)';
    }

    return (
        <div className="form-output">
            <p className="form-output__inputURL">{inputUrl}</p>
            <p className="form-output__shortURL" id="shortUrl">{shortUrl}</p>
            <button className="form-output__btn" onClick={copyShortUrl}>Copy</button>
        </div>
    );
}

export default FormOutput;