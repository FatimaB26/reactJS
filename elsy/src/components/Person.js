import React from 'react';
import '../App.css';

class Person extends React.Component {
  render() {
    const fontStyle = {
      color: 'black',
      fontSize: '100px',
    };

    return (
      <div className = "box" className = "col-md-2" className = "col-6" style = {fontStyle}>
        <span class="material-icons">directions_walk</span>
        <p>zalam</p>
      </div>
    );
  }
}

export default Person;