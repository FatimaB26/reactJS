import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '.'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      name: '',
      capital: '',
      flag: '',
      population: 0,
      region: '',
    };
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/name/france')
    .then((response) => { 
      return response.json()
    })
    .then((result) => {
      this.setState({
        name: json[0].name,
        capital: json[0].capital,
        flag: json[0].flag,
        population: json[0].population,
        region: json[0].region,
      }); 
    }).catch
    }

  render() {
    return (
      <div className="container-fluid">

        <p>{this.state.name}</p>
        <p>{this.state.capital}</p>
        <p>{this.state.region}</p>
        <p>{this.state.population}</p>
        <p>{this.state.flag}</p>

      </div>
    );
  }
}

export default App
