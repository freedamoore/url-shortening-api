import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';

function App() {
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

  return (
    <div className="App">
      <Navbar />
     <p> Some temporary text here just to test the size and appearance</p>
      <form>
        <input type='url' id='url'></input>
        <input type="submit" value="Shorten it!" onClick={ handleSubmit }></input>
      </form>
      <p>{inputUrl}</p>
      <p>{shortUrl}</p>
    </div>
  );
}

export default App;
