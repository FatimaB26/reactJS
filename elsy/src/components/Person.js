import React from 'react';
import '../App.css';
import Icon from './core/icon';
import Slider from './core/slider'

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
        <p>{this.props.steps} steps</p>
        <Slider max = {this.props.max} 
                        min = {this.props.min} 
                        onChange = {this.props.onChange} 
                        value = {this.props.steps}></Slider>
      </div>
    );
  }
}

export default Person;