import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'


class App extends Component {

  constructor () {
    super ();
    this.incrementCount = this.incrementCount.bind(this)
    this.decrementCount = this.decrementCount.bind(this)
  }

  state = {
    count: 1,
  };

  incrementCount () {
    this.setState ({
      count : Math.min (this.state.count + 1 , 100)
    })
  }

  decrementCount () {
    this.setState ({
      count: Math.max (this.state.count -1 , 0)
    })
  }

  render() {
    return (
      <div className="App">

        <Counter count = {this.state.count}

        incrementFn = {this.incrementCount}

        decrementFn = {this.decrementCount}></Counter>
        

      </div>
    );
  }
}

export default App;
