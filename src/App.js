import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Form from './components/form/form';
import Features from './components/features/features';
import CTA from './components/cta/cta';
import Footer from './components/footer/footer';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Form />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
