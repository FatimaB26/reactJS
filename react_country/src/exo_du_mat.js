import React, { Component } from 'react';
import Enfant from './components/Enfant';
class Parent extends Component {


​
    render () {
        return (
            <div>
                <Enfant>button</Enfant>
                {this.onClickName()}
            </div>
        )
    }
}
​
export default App;
​
​
class Enfant extends React.Component {

    constructor() {
        super() 
        this.onClickName = this.onClickName.bind(this);
        this.state = {
            name : 'fatima'
        }
    }

    onClickName() {
        this.setState({
          name: 'fatima'
        })
      }

​
    render() {
        return (
            <button onClick = {this.onClickName}>Nom {this.props.name}</button>
        )
    }
​
}
​
export default Enfant