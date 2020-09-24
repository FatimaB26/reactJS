import React from 'react';
import HeartRate from './components/HeartRate';
import Person from './components/Person'

import './css/bootstrap.min.css'
import './css/style.css'

const MIN_TEMPERATURE = -20,
    MAX_TEMPERATURE = 40,
    MIN_HEART = 80,
    MAX_HEART = 180,
    MIN_STEPS = 0,
    MAX_STEPS = 50000

class App extends React.Component {

    render() {
        return (
            <div className="container-fluid">
                <Person></Person>
                <HeartRate heart={MIN_HEART}></HeartRate>
            </div>
        );
    }
}

export default App;