import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../config/austattslottoConfig';

class AUSTattslotto extends Component {
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



    config.numbersObject = {};
    config.count = 0;
    this.state = {
      sortable: []
    }
  }

  componentDidMount(){
    while(config.count < config.iterator) {//8145060

      this.selectNumbers();
      this.processSelected();
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


  processSelected() {
    for(var j = 0; j < config.selectedArray.length; j++) {
      for(var k = 0; k < config.selectedNumbers.length; k++){
        config.selectedArray[config.selectedNumbers[j]] += this.multiplier(config.selectedNumbers[k]);
      }
    }

  }



  mapToObject() {
    for(var p = 1; p < config.poolArray.length; p++) {
      config.numbersObject[config.poolArray[p] - 1] = config.selectedArray[p];
    }




    config.sortable = [];
    for (var value in config.numbersObject) {
        config.sortable.push([value, config.numbersObject[value]]);
    }

    config.sortable.sort(function(a, b) {
        return a[1] - b[1];
    });



    this.setState({
      sortable: config.sortable
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



}

resetApp() {
  config.selectedNumbers = [];
}
multiplier(num) {
  var bonus = 0;

  if(num === 1 || num === 44) {
   bonus +=  1.12;
 } else if(num === 25 || num === 45) {
   bonus +=  1.11;
 }else if(num === 5 || num === 43) {
   bonus +=  1.11;
 }else if(num === 18 || num === 4) {
   bonus +=  1.10;
 }else if(num === 40 || num === 14) {
   bonus +=  1.10;
 }else if(num === 21 || num === 28) {
   bonus +=  1.09;
 }else if(num === 11 || num === 39) {
   bonus +=  1.08;
 }else if(num === 7 || num === 41) {
   bonus +=  1.08;
 }else if(num === 12 || num === 2) {
   bonus +=  1.07;
 }else if(num === 36 || num === 17) {
   bonus +=  1.07;
 }else if(num === 19 || num === 35) {
   bonus +=  1.6;
 }else if(num === 6 || num === 42) {
   bonus +=  1.06;
 }else if(num === 20 || num === 30) {
   bonus += 1.05;
 }else if(num === 13 || num === 10) {
   bonus +=  1.05;
 }else if(num === 8 || num === 23) {
   bonus +=  1.04;
 }else if(num === 3 || num === 27) {
   bonus +=  1.04;
 }else if(num === 31 || num === 21) {
   bonus +=  1.03;
 }else if(num === 15 || num === 34) {
   bonus +=  1.03;
 }else if(num === 16 || num === 29) {
   bonus +=  1.02;
 }else if(num === 24 || num === 32) {
   bonus +=  1.02;
 } else if(num === 33 || num === 37) {
   bonus +=  1.01;
 } else if(num === 26 || num === 38)
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

    if(this.state.sortable.length > 0){
      for(var i = this.state.sortable.length - config.pool; i < this.state.sortable.length; i++)
      {
        display.push(this.state.sortable[i][0]);

        if(i !== this.state.sortable.length -1){
          display.push('|')
        }
      }
    }






    return (
      <div>
        <h3>{display}</h3>
      </div>
    )
  }
  render() {
    return (
      <div>
        <h1>AUS Tattslotto</h1>
        <h2>{this.displayNumbers()}</h2>
        <h3><Link to='/'>Back</Link></h3>
        </div>
    )
  }
}
export default AUSTattslotto;
