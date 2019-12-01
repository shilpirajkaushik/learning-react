import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Welcome from './Welcome';
import StatelessWelcome from './StatelessWelcome';

function App() {
  return (
    <div className="App">
     
     <Welcome message="This message is passed by the parent component to the child component"></Welcome>

     <StatelessWelcome counter='0'/>

    </div>
  );
}

export default App;
