import React, { Component } from 'react';
import Popular from './components/Popular.js';
import './App.css';

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Nav = require('./components/Nav');
var Home = require('./components/Home');
var Battle = require('./components/Battle');
var Results = require('./components/Results');
var Switch = ReactRouter.Switch;
var Route = ReactRouter.Route;



class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
        <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/popular' component={Popular} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/battle/results' component={Results} />
            <Route render={function() {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
