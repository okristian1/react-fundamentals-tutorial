import React, { Component } from 'react';
import Popular from './components/Popular.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="container">
          <Popular/>
        </div>
    );
  }
}

export default App;
