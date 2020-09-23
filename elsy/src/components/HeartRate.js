import React from 'react';
import Icon from './core/icon';
import Slider from './core/slider';

class HeartRate extends React.Component {

    render () {
        const fontStyle2 = {
            color: 'red',
            fontSize: '100px',
          };
        return (

            <div className = "box col-md-2 col-6">
                <span className="material-icons" style = {fontStyle2} >favorite</span>
                <Icon name = "favorite" style = {fontStyle2}></Icon>
                <p>{this.props.heart} BPM</p>
                <Slider max = {this.props.max} 
                        min = {this.props.min} 
                        onChange = {this.props.onChange} 
                        value = {this.props.heart}></Slider>
            </div>

        )
    }
}

export default HeartRate