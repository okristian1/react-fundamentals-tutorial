import './App.css';
var React = require('react');
var Popular = require('./components/Popular.js');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Nav = require('./components/Nav');
var Home = require('./components/Home');
var Battle = require('./components/Battle');
var Results = require('./components/Results');
var Switch = ReactRouter.Switch;
var Route = ReactRouter.Route;



class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
        <Nav />
          <Switch>
            <Route exact path='/tutorial' component={Home} />
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
