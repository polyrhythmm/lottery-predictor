import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div>
        <h1>The Amazing Lottery Predictor</h1>
        <h1>Select your lottery</h1>
        <h2><a href="/uspowerball">US Powerball</a></h2>
        <h2><a href="/usmegamillions">US MegaMillions</a></h2>
        <h2><a href="/euromillions">EuroMillions</a></h2>
        <h2><a href="/auspowerball">AUS Powerball</a></h2>
        <h2><a href="/ausozlotto">AUS OzLotto</a></h2>
        <h2><a href="/austattslotto">AUS Tattslotto</a></h2>
      </div>
    )
  }
}
export default Landing;
