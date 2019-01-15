import React, { Component } from 'react';
import './App.scss';
import HomePageContainer from '../HomePage/HomePageContainer';
import IntroPageContainer from '../IntroPage/IntroPageContainer';
import SinglePageContainer from '../SinglePage/SinglePageContainer';
import NavettesPageContainer from '../NavettesPage/NavettesPageContainer';
import AstronautesPageContainer from '../AstronautesPage/AstronautesPageContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={HomePageContainer}/>
            <Route exact path='/intro' component={IntroPageContainer}/>
            <Route exact path='/singlePage/:slug' component={SinglePageContainer}/>
            <Route exact path='/navettes' component={NavettesPageContainer}/>
            <Route exact path='/astronautes' component={AstronautesPageContainer}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;