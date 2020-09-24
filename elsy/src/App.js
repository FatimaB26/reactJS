import React from 'react';
import Person from './components/Person'
import './css/styles.css'
import './css/bootstrap.min.css'
import HeartRate from './components/HeartRate'
import Temperature from './components/Temperature'
import Water from './components/Water'

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
    this.onTpChange = this.onTpChange.bind(this)
    this.onStepsChange = this.onStepsChange.bind(this)
    this.calculateWater = this.calculateWater.bind(this)
    this.state = {
      water : 1.5,
      heart : 120,
      temperature : -10,
      steps : 3000
    };
  }

  calculateWater (val) {
    this.setState ({water : this.state.water})
  }

  onHeartChange (val) {
    this.setState({ heart: val})
  }

  onTpChange (val) {
    this.setState ({temperature: val})
  }

  onStepsChange (val) {
    this.setState ({steps: val})
  }
  
  render() {
    return (
      <div className = "container-fluid">
        <Water water = {this.state.water}
                    onChange = {this.calculateWater} >{this.state.val}</Water>
        <Person steps = {this.state.steps}
                    min = {MIN_STEPS} 
                    max = {MAX_STEPS} 
                    onChange = {this.onStepsChange} >{this.state.val}</Person>
        <HeartRate heart = {this.state.heart} 
                    min = {MIN_HEART} 
                    max = {MAX_HEART} 
                    onChange = {this.onHeartChange} >{this.state.val}</HeartRate>
        <Temperature temperature = {this.state.temperature} 
                    min = {MIN_TEMPERATURE} 
                    max = {MAX_TEMPERATURE} 
                    onChange = {this.onTpChange} >{this.state.val}</Temperature>
      </div>
    );
  }

}


export default App;
