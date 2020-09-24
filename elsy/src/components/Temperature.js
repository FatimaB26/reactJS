import React from 'react'
import Icon from './core/icon'
import Slider from './core/slider'

class Temperature extends React.Component {

    render () {
        const fontStyle = {
            color: 'yellow',
            fontSize: '100px',
          };
        return (

            <div className = "box col-md-2 col-6">
                <span className="material-icons"  style = {fontStyle}>wb_sunny</span>
                <Icon name = "wb_sunny" color = "yellow" ></Icon>
                <p>{this.props.temperature}'C</p>
                <Slider max = {this.props.max} 
                        min = {this.props.min} 
                        onChange = {this.props.onChange} 
                        value = {this.props.temperature}></Slider>
            </div>

        )
    }
}

export default Temperature