import React from 'react' 

class Name extends React.Component {

    render () {
        return (

            <div>
                <p>Name {this.props.name}</p>
            </div>

        )
    }
}

export default Name