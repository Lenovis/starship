import React, { Component } from 'react';
import './App.css';
import Data from './components/Ship.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <p>
          Hi!
        </p>
        <Data></Data>
      </div>
    );
  }
}

export default App;
