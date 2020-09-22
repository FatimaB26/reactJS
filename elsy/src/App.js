import React from 'react';
import Person from './components/Person'
import styles from './components/styles.css'
import HeartRate from './components/HeartRate'

const MIN_TEMPERATURE = -20
const MAX_TEMPERATURE = 40
const MIN_HEART = 80
const MAX_HEART = 180
const MIN_STEPS = 0
const MAX_STEPS = 50000

class App extends React.Component {

  constructor () {
    super ()
    this.state = {
      water : 0,
      heart : 120,
      temperature : -10,
      steps : 3000
    };
  }

  
  render() {
    return (
      <div>
        <Person>{this.state.steps}</Person>
        <HeartRate heart = "80" >{this.state.heart}</HeartRate>
      </div>
    );
  }
}

export default App;
