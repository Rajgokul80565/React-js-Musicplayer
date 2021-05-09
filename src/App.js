import React, {useState, useEffect} from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import Main from './components/Main';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {

  


  return (
    <div className="App">
      <Router>
      <div>
      <Navbar />
      <Switch>
      <Route path="/" exact component={Home} ></Route>
        <Route path="/about" component={About} ></Route>
        <Route path="/contact" component={Contact} ></Route>
        <Route path="/player" component={Main} ></Route>
      </Switch>
      </div>
      </Router>
       <Footer />
    
    </div>
  );
}

export default App;
