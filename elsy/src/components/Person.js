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
      <div className = "box" className = "col-md-2" className = "col-6">
        <span className="material-icons"  style = {fontStyle}>directions_walk</span>
        <Icon name = "directions_walk" style = {fontStyle}></Icon>
      </div>
    );
  }
}

export default Person;