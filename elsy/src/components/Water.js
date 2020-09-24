import React from 'react'
import Icon from './core/icon'

class Water extends React.Component {

    render () {
        const fontStyle = {
            color: '#3A85FF',
            fontSize: '100px',
          };
        return (

            <div className = "box col-md-2 col-6">
                <span className="material-icons"  style = {fontStyle}>local_drink</span>
                <Icon name = "local_drink" color = '#3A85FF'></Icon>
                <p>{this.props.water} L</p>
            </div>
        )
    }
}

export default Water 