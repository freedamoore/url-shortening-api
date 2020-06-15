import React from 'react';
import './form.scss'

const Form = ({inputUrl, shortUrl, handleSubmit}) => {
    return(
        <div className="form-container">
            <form className="form">
                <input type='url' id='url' className="form__input"></input>
                <input type="submit" value="Shorten it!" className="form__btn" onClick={ handleSubmit }></input>
            </form>
            <p>{inputUrl}</p>
            <p>{shortUrl}</p>
        </div>
    )
  
}

export default Form;