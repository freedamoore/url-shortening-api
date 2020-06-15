import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Form from './components/form/form';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Form />
    </div>
  );
}

export default App;
