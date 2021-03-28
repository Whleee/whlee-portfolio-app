import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Education from './components/pages/Education';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component = {Home} />
          <Route path='/about' exact component= {About} />
          <Route path='/education' exact component= {Education} />
          <Route path='/contact' exact component= {Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
