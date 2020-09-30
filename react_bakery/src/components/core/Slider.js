import React from 'react'
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css'


class Slider extends React.Component {

    render () {
        return (
            <RCSlider 
            max = {10}
            min = {1}
            onChange = {this.props.onChange} 
            value = {this.props.value}></RCSlider>
        )
    }
}

export default Slider