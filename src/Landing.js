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
        <div align="center">Visitors: <a href='https://www.counter12.com'><img src='https://www.counter12.com/img-Z7z1Cdy9bxd4W7bC-2.gif' border='0' alt='acesso gratis'/></a><script type='text/javascript' src='https://www.counter12.com/ad.js?id=Z7z1Cdy9bxd4W7bC'></script></div>
      </div>
    )
  }
}
export default Landing;
