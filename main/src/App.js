import React, { Component } from 'react';
import keyboard from './keyboard.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={keyboard} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          Are we ready to win??
        </p>
      </div>
    );
  }
}

export default App;
