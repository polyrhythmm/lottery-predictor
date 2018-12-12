import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../config/uspowerballConfig';

class USPowerBall extends Component {
  constructor() {
    super();

    config.poolArray =[]
    for(var i = 1; i <= config.lotteryPool; i++) {
        config.poolArray.push(i);
    }

    config.selectedArray = [];
    for(var j = 1; j <= config.lotteryPool; j++) {
      config.selectedArray.push(0);
    }

    config.powerArray = [];
    for(var k = 1; k <= config.powerPool; k++) {
      config.powerArray.push(k);
    }

    config.powerSelectedArray = [];
    for(var m = 1; m <= config.powerPool; m++) {
      config.powerSelectedArray.push(0);
    }

    config.numbersObject = {};
    config.powerObject = {};
    config.count = 0;
    this.state = {
      sortable: [],
      powerSortable: []
    }
  }

  componentDidMount(){
    while(config.count < config.iterator) {//8145060

      this.selectNumbers();
      this.processSelected();
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
      var random = Math.floor(Math.random() * config.poolArray.length) + 1;

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
        config.selectedPower = Math.floor(Math.random() * config.powerArray.length) + 1;

  }

  processSelected() {
    for(var j = 0; j < config.selectedArray.length; j++) {
      for(var k = 0; k < config.selectedNumbers.length; k++){
        config.selectedArray[config.selectedNumbers[j]] += this.multiplier(config.selectedNumbers[k]);
      }
    }

  }

  processPowerBall() {

    config.powerSelectedArray[config.selectedPower - 1] += this.multiplier(config.selectedPower);

  }

  mapToObject() {
    for(var p = 1; p < config.poolArray.length; p++) {
      config.numbersObject[config.poolArray[p] - 1] = config.selectedArray[p];
    }

    for(var i = 0; i < config.powerArray.length; i++) {
      config.powerObject[config.powerArray[i]] = config.powerSelectedArray[i]
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
    for(var j = config.powerSortable.length - 1; j<config.powerSortable.length; j++) {
      console.log('<<<<<  ' + config.powerSortable[j][0] + '  >>>>>');
    }
  }
}

resetApp() {
  config.selectedNumbers = [];
}


multiplier(num) {
  var bonus = 0;

  if(num === 32 || num === 65) {
   bonus +=  1.12;
 } else if(num === 41 || num === 60) {
   bonus +=  1.11;
 }else if(num === 16 || num === 66) {
   bonus +=  1.11;
 }else if(num === 20 || num === 67) {
   bonus +=  1.10
 }else if(num === 26 || num === 68) {
   bonus +=  1.10;
 }else if(num === 40 || num === 63) {
   bonus +=  1.09;
 }else if(num === 45 || num === 62) {
   bonus +=  1.08;
 }else if(num === 39 || num === 61) {
   bonus +=  1.08;
 }else if(num === 28 || num === 69) {
   bonus +=  1.07;
 }else if(num === 22 || num === 64) {
   bonus +=  1.07;
 }else if(num === 42 || num === 58) {
   bonus +=  1.6;
 }else if(num === 23 || num === 57) {
   bonus +=  1.06;
 }else if(num === 19 || num === 56) {
   bonus += 1.05;
 }else if(num === 12 || num === 59) {
   bonus +=  1.05;
 }else if(num === 14 || num === 55) {
   bonus +=  1.04;
 }else if(num === 13 || num === 54) {
   bonus +=  1.04;
 }else if(num === 49 || num === 53) {
   bonus +=  1.03;
 }else if(num === 5 || num === 50) {
   bonus +=  1.03;
 }else if(num === 10 || num === 50) {
   bonus +=  1.02;
 }else if(num === 9 || num === 52) {
   bonus +=  1.02;
 } else if(num === 8 || num === 46) {
   bonus +=  1.01;
 } else if(num === 48 || num === 21)
 {
   bonus += 1.01;
 }

  if(bonus === 0){
    return 1;
  } else {
    return bonus;
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
        <h1>US Powerball</h1>
        <h2>{this.displayNumbers()}</h2>
        <h3><Link to='/'>Back</Link></h3>
        </div>
    )
  }
}
export default USPowerBall;
