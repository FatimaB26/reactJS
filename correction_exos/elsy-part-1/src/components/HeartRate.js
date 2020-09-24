import React, { Component } from "react";
import Icon from './core/Icon'

class HeartRate extends Component {

    render() {
        return (
            <div className="box col-md-2 col-6">
                <Icon name="favorite" color="red"></Icon>
                <p>{this.props.heart}</p>
            </div>
        );
    }
}

export default HeartRate