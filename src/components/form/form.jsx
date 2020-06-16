import React , { useState, useEffect } from 'react';
import './form.scss'
import FormOutput from '../form-output/form-output';

const Form = () => {

    const [shortUrl, setShortUrl] = useState('');
    const [inputUrl, setInputUrl] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      //TODO: need to handle invalid urls here....
      setInputUrl(document.getElementById('url').value);
    };
  
    useEffect(() => {
      if (inputUrl.length > 0){
          fetch('https://rel.ink/api/links/', {
          method: 'POST',
          body: JSON.stringify({
            url: `${inputUrl}`
          }),
          headers: {
            "Content-type": "application/json"
          }
        })
        .then(response => response.json())
        .then(json => setShortUrl(`https://rel.ink/${json.hashid}`))
        .catch((error) => console.error('Error:', error));
      }
    }, [inputUrl]);

    return(
        <div className="form-container">
            <form className="form">
                <input type='url' id='url' className="form__input" placeholder="Shorten a link here..."></input>
                <input type="submit" value="Shorten it!" className="form__btn" onClick={ handleSubmit }></input>
            </form>
            <div className="form__output">
                {shortUrl.length ? <FormOutput inputUrl={inputUrl} shortUrl={shortUrl} /> :null}
            </div>
            
        </div>
    )
  
}

export default Form;