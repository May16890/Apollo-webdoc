import React, { Component } from 'react';
import './App.scss';
import HomeContainer from '../Home/HomeContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={HomeContainer}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;