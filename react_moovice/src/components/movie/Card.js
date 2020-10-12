import React from 'react';

class Card extends React.Component {

    render() {

        const {
            title,
            description,
            imgURL

        } = this.props

        return (
            <div className="container">
                <img src={imgURL} alt="" ></img>
                <h2> {title} </h2>
                <h4> {description} </h4>

            </div>
        )
    }
}

export default Card