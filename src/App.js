
import React from 'react';

import Home from './Component.js/Home.js';
import About from './Component.js/About.js';
import Contact from './Component.js/Contact.js';
import Help from './Component.js/Help.js';
import Menu from './Component.js/Menu.js';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
     <div className="App">


          <Menu/>
          <Switch>
          <Route path="/" exact Component={Home}/>
          <Route path="/About"  Component={About}/>
          <Route path="/Contact"  Component={Contact}/>
          <Route path="/Help"  Component={Help}/>
            </Switch>
       </div>
   </BrowserRouter>
  );
}
export default App;


