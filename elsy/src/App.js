import React from 'react';
import Person from './components/Person'
import './css/styles.css'
import './css/bootstrap.min.css'
import HeartRate from './components/HeartRate'
import Temperature from './components/Temperature'

const MIN_TEMPERATURE = -20
const MAX_TEMPERATURE = 40
const MIN_HEART = 80
const MAX_HEART = 180
const MIN_STEPS = 0
const MAX_STEPS = 50000

class App extends React.Component {

  constructor () {
    super ()
    this.onHeartChange = this.onHeartChange.bind(this)
    this.state = {
      water : 0,
      heart : 120,
      temperature : -10,
      steps : 3000
    };
  }

  onHeartChange (val) {
    this.setState({ heart: val})
  }
  
  render() {
    return (
      <div className = "container-fluid">
        <Person>{this.state.steps}</Person>
        <HeartRate heart = {this.state.heart} 
                    min = {MIN_HEART} 
                    max = {MAX_HEART} 
                    onChange = {this.onHeartChange} >{this.state.val}</HeartRate>
                    <Temperature></Temperature>
      </div>
    );
  }
}

export default App;
