import React from 'react';
import Icon from './core/icon';

class HeartRate extends React.Component {

    render () {
        const fontStyle2 = {
            color: 'red',
            fontSize: '100px',
          };
        return (

            <div className = "box" className = "col-md-2" className = "col-6">
                <span className="material-icons" style = {fontStyle2} >favorite</span>
                <p>{this.props.heart}</p>
                <Icon name = "favorite" style = {fontStyle2}></Icon>
            </div>

        )
    }
}

export default HeartRate