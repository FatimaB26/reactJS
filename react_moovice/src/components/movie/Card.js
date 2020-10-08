import React from 'react';
import logo from '../movie/placeholder.png'

class Card extends React.Component {

    render() {
        return (
            <div className="card">
                <img src={logo}></img>
                <p>{this.props.info.titre}</p>
                <p>{this.props.info.description}</p>

            </div>
        )
    }
}

export default Card