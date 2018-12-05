import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './Landing';
import USPowerBall from './components/USPowerBall';
import EuroMillions from './components/EuroMillions';
import USMegaMillions from './components/USMegaMillions';
import AUSPowerBall from './components/AUSPowerBall';
import AUSOzLotto from './components/AUSOzLotto';
import AUSTattslotto from './components/AUSTattslotto';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (

      <Router>
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route path="/uspowerball" component={USPowerBall} />
        <Route path="/usmegamillions" component={USMegaMillions} />
        <Route path="/euromillions" component={EuroMillions} />
        <Route path="/auspowerball" component={AUSPowerBall} />
        <Route path="/ausozlotto" component={AUSOzLotto} />
        <Route path="/austattslotto" component={AUSTattslotto} />
        </div>
      </Router>

    );
  }
}

export default App;
