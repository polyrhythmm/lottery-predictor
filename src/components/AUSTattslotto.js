import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../config/austattslottoConfig';

class AUSTattslotto extends Component {
  constructor() {
    super();

    for(var i = 1; i <= config.lotteryPool; i++) {
        config.poolArray.push(i);
    }

    for(var j = 1; j <= config.lotteryPool; j++) {
      config.selectedArray.push(0);
    }

    this.state = {
      sortable: []
    }
  }

  componentDidMount(){
    while(config.count < config.iteration) {//8145060
      this.selectNumbers();
      this.processSelected();
      this.resetApp();
      this.increment();
    }

    this.mapToObject();

    //this.log();
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



  processSelected() {
    for(var j = 0; j < config.selectedArray.length; j++) {
      for(var k = 0; k < config.selectedNumbers.length; k++){
        config.selectedArray[config.selectedNumbers[j]] += this.multiplier(config.selectedNumbers[k]);
      }
    }

  }



  mapToObject() {
    for(var p = 0; p < config.poolArray.length; p++) {
      config.numbersObject[config.poolArray[p]] = config.selectedArray[p];
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
}
  multiplier(num) {
    if(num === 20 || num === 1)
    {
      return 1.01;
    } else if(num === 7 || num === 24) {
      return 1.02;
    } else if(num === 42 || num === 12) {
      return 1.03;
    } else if(num === 27 || num === 31) {
      return 1.04;
    } else if(num === 45 || num === 6) {
      return 1.05;
    } else if(num === 5 || num === 39) {
      return 1.06;
    } else if(num === 49 || num === 36) {
      return 1.07;
    } else if(num === 14 || num === 13) {
      return 1.08;
    } else if(num === 25 || num === 40) {
      return 1.09;
    } else if(num === 29 || num === 35) {
      return 1.10;
    }  else if(num === 21 || num === 48) {
      return 1.10;
    } else if(num === 26 || num === 8) {
      return 1.11;
    } else if(num === 15 || num === 16) {
      return 1.12;
    } else if(num === 19 || num === 9 || num === 29) {
      return 1.13;
    } else if(num === 37 || num === 34 || num === 47) {
      return 1.14;
    } else if(num === 38 || num === 18 || num === 50) {
      return 1.15;
    } else if(num === 30 || num === 32 || num === 38) {
      return 1.16;
    } else if(num === 10 || num === 22 || num === 20) {
      return 1.17;
    } else if(num === 17 || num === 2 || num === 33) {
      return 1.18;
    } else if(num === 4 || num === 41 || num === 46) {
      return 1.19;
    } else if(num === 23 || num === 47 || num === 34) {
      return 1.20;
    } else if(num === 44 || num === 33 || num === 11) {
      return 1.21;
    } else if(num === 50 || num === 46 || num === 22) {
      return 1.22
    } else {
      return 1;
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
