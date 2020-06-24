import React , { useState, useEffect } from 'react';
import './form.scss'
import FormOutput from '../form-output/form-output';

const Form = () => {

    const [shortUrl, setShortUrl] = useState('');
    const [inputUrl, setInputUrl] = useState('');
    const [invalidUrl, setInvalidUrl] = useState(false);
    
    const handleSubmit = (event) => {
      event.preventDefault();
      
      //check that url is valid. If so set it as the input Url
      const url = document.getElementById('url').value;
     
      const regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
     
      if (regexp.test(url)){
        setInvalidUrl(false);
        setInputUrl(url); 
      }
      else{
        setInvalidUrl(true);
      }
     
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
                {inputUrl.length && !invalidUrl ? <FormOutput inputUrl={inputUrl} shortUrl={shortUrl} /> :null}
                {invalidUrl ? <p className="form__error">Please enter a valid URL</p> :null}
            </div>
            
        </div>
    )
  
}

export default Form;