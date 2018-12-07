import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../config/auspowerballConfig';

class AUSPowerBall extends Component {
  constructor() {
    super();

    for(var i = 1; i <= config.lotteryPool; i++) {
        config.poolArray.push(i);
    }

    for(var j = 1; j <= config.lotteryPool; j++) {
      config.selectedArray.push(0);
    }

    for(var k = 1; k <= config.powerPool; k++) {
      config.powerArray.push(k);
    }

    for(var m = 1; m <= config.powerPool; m++) {
      config.powerSelectedArray.push(0);
    }

    this.state = {
      sortable: [],
      powerSortable: []
    }
  }

  componentDidMount(){
    while(config.count < config.poolIteration) {//8145060
      this.selectNumbers();
      this.processSelected();
      this.resetApp();
      this.increment();
    }

    config.count = 0;

    while(config.count < config.powerIteration)
    {
      this.selectPowerBall();
      this.processPowerBall();
      this.resetApp();
      this.increment();
    }
    this.mapToObject();

  //  this.log();
  }

  runNumbers() {
    this.selectNumbers();
  }
  selectNumbers() {
    let newArray = [];


    for(var i = 1; i <= config.pool; i++) {
      var random = Math.floor(Math.random() * config.poolArray.length);

      if(config.selectedNumbers.indexOf(random, 0) === -1) {
        newArray.push(random);
      } else {
        this.resetApp();
        this.selectNumbers();
     }
    }

  config.selectedNumbers = newArray

  }

  selectPowerBall() {

      config.selectedPower = Math.floor(Math.random() * config.powerArray.length)

  }

  processSelected() {
    for(var j = 0; j < config.selectedArray.length; j++) {
      for(var k = 0; k < config.selectedNumbers.length; k++){
        config.selectedArray[config.selectedNumbers[j]] += this.multiplier(config.selectedNumbers[k]);
      }
    }

  }

  processPowerBall() {
    config.powerSelectedArray[config.selectedPower] += this.multiplier(config.selectedPower);
  }

  mapToObject() {
    for(var p = 0; p < config.poolArray.length; p++) {
      config.numbersObject[config.poolArray[p]] = config.selectedArray[p];
    }

    for(var i = 0; i < config.powerArray.length; i++) {
      config.powerObject[config.powerArray[i]] = config.powerSelectedArray[i];
    }

    config.sortable = [];
    for (var value in config.numbersObject) {
        config.sortable.push([value, config.numbersObject[value]]);
    }

    config.sortable.sort(function(a, b) {
        return a[1] - b[1];
    });

    config.powerSortable = [];
    for (var powerValue in config.powerObject) {
        config.powerSortable.push([powerValue, config.powerObject[powerValue]]);
    }

    config.powerSortable.sort(function(a, b) {
        return a[1] - b[1];
    });

    this.setState({
      sortable: config.sortable,
      powerSortable: config.powerSortable
    })

    console.log(config.powerSortable)
  }



  increment() {
    config.count += 1;
  }

  log() {

      console.log("   ---------------------------");
      console.log("   YOUR EUROMILLIONS NUMBERS ARE");
      console.log("   ---------------------------");
      for(var i = config.poolArray.length - config.pool; i<config.poolArray.length; i++) {
        console.log('<<<<<  ' + config.sortable[i][0] + '  >>>>>');
      }


  if(config.powerSortable.length > 0) {
    console.log("   ---------------------------");
    console.log("   YOUR LUCKY STARS ARE       ");
    console.log("   ---------------------------");
    for(var j = config.powerSortable.length - 2; j<config.powerSortable.length; j++) {
      console.log('<<<<<  ' + config.powerSortable[j][0] + '  >>>>>');
    }
  }
}

resetApp() {
  config.selectedNumbers = [];
  config.selectedPower = 0;
}
multiplier(num) {
  if(num === 36 || num === 11)
  {
    return 1.01;
  } else if(num === 18 || num === 4) {
    return 1.02;
  } else if(num === 17 || num === 8) {
    return 1.03;
  } else if(num === 6 || num === 24) {
    return 1.04;
  } else if(num === 26 || num === 9) {
    return 1.05;
  } else if(num === 4 || num === 26) {
    return 1.06;
  } else if(num === 25 || num === 13) {
    return 1.07;
  } else if(num === 31 || num === 10) {
    return 1.08;
  } else if(num === 2 || num === 20) {
    return 1.09;
  } else if(num === 32 || num === 27) {
    return 1.10;
  }  else if(num === 7 || num === 32) {
    return 1.10;
  } else if(num === 29 || num === 21) {
    return 1.11;
  } else if(num === 34 || num === 22) {
    return 1.12;
  } else if(num === 8 || num === 19) {
    return 1.13;
  } else if(num === 19 || num === 5) {
    return 1.14;
  } else if(num === 13 || num === 6) {
    return 1.15;
  } else if(num === 8 || num === 1) {
    return 1.16;
  } else if(num === 19 || num === 31) {
    return 1.17;
  } else if(num === 13 || num === 40) {
    return 1.18;
  } else if(num === 23 || num === 37) {
    return 1.19;
  } else if(num === 24 || num === 39) {
    return 1.20;
  } else if(num === 22 || num === 38) {
    return 1.21;
  } else if(num === 5 || num === 36) {
    return 1.22
  } else {
    return 1;
  }
}

  displayNumbers() {
    var display = [];
    var displayPower = [];

    if(this.state.sortable.length > 0){
      for(var i = this.state.sortable.length - config.pool; i < this.state.sortable.length; i++)
      {
        display.push(this.state.sortable[i][0]);

        if(i !== this.state.sortable.length -1){
          display.push('|')
        }
      }
    }

    if(this.state.powerSortable.length > 0){
      for(var j = this.state.powerSortable.length - 1; j<this.state.powerSortable.length; j++) {
        displayPower.push(this.state.powerSortable[j][0]);


      }


    }
    return (
      <div>
        <h3>{display}</h3>
        <h3>{displayPower}</h3>
      </div>
    )
  }
  render() {
    return (
      <div>
        <h1>AUS Powerball</h1>
        <h2>{this.displayNumbers()}</h2>
        <h3><Link to='/'>Back</Link></h3>
        </div>
    )
  }
}
export default AUSPowerBall;
