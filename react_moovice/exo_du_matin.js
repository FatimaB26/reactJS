import React from 'react';
import CompB from './CompB'
​
class CompA extends React.Component {

    constructor () {
        this.click = this.click.bind(this);
        super ();
        this.state = {
            name: 'coucou',
            countries: []
        }

    }

    componentDidMount() {

        this.setState({
            name = 'salut'
        })
      }).catch(err => console.error(err));

​
​
    click() {
    }

    render() {
​
        <div>
            Je suis le composant A
            <CompB title={this.state.name}></CompB>
            <button onclick={this.click}></button>
        </div>
    }
}
​
export default Comp;
​
​
// ------------------------
​
import React from 'react';
​
class CompB extends React.Component {
​
    constructor() {
        this.state = {
            name: 'nihao'
        }
    }
​
    componentdidmount() {
        console.log('Je suis une méthode de cycle de vie appellé au mount')
    }
​
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.countries}</p>
            </div>
        )
    }
}
​
export default CompB;