import React from 'react'


class Button extends React.Component {

render () {
    return (
        <div>
            <p>children: {this.props.children}</p>
            <p>isSelected: {this.props.isSelected}</p>
            <p>onClick: {this.props.onClick}</p>
        </div>

    )
}
}

export default Button 