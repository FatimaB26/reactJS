import React from 'react';
import '../App.css';
import Icon from './core/icon';

class Person extends React.Component {
  render() {
    const fontStyle = {
      color: 'black',
      fontSize: '100px',
    };

    return (
      <div className = "box col-md-2 col-6">
        <span className="material-icons"  style = {fontStyle}>directions_walk</span>
        <Icon name = "directions_walk" style = {fontStyle}></Icon>
        <p>{this.props.steps} STEPS</p>
      </div>
    );
  }
}

export default Person;