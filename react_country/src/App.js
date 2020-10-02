import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Name from './components/Name'
import Capital from './components/Capital'
import Region from './components/Region'
import Population from './components/Population'
import Flag from './components/Flag'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      name: '',
      capital: '',
      flag: '',
      population: 0,
      region: '',
      error: null
    };
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/name/france').then((response) => { 
      response = response.json()
      response.then ((result) => {
        console.log (result)
      })
    })
    }

  render() {
    return (
      <div className="container-fluid">

        <Name name={this.state.name} ></Name>
        <Capital capital={this.state.capital} ></Capital>
        <Region region={this.state.region} ></Region>
        <Population population={this.state.population} ></Population>
        <Flag flag={this.state.flag} ></Flag>

      </div>
    );
  }
}

export default App
