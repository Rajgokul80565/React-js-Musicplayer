import React, {useState, useEffect} from 'react';

import Navbar from './components/Navbar';
import Main from './components/Main';
import Landing from './components/landing/Landing';



function App() {

  


  return (
    <div className="App">
    <Navbar />
    <Landing />
      <Main />
    
    </div>
  );
}

export default App;
