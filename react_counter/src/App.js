import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    count: 1,
  };

  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <h2
        onClick={() => {
          this.setState({
            count: !this.state.count,
          });
        }}>
      </h2>
      </div>
    );
  }
}

export default App;
