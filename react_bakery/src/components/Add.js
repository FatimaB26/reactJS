import React from 'react'
import 'rc-slider/assets/index.css'
import Button from './core/Button'
import Slider from './core/Slider'

class Add extends React.Component {

    constructor() {
        super(); 
        this.updateInput = this.updateInput.bind(this)
        this.updatePrice = this.updatePrice.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.addItem = this.addItem.bind(this)
        this.state = { 
          input: "",
          price: 1
        }}

updateInput (event) {
    this.setState ({
        input : event.target.value
    })
}

updatePrice (val) {
    this.setState ({
        price : val
    })
}

submitForm () {
    console.log (this.state.input)
    console.log (this.state.price)
    addItem ()
}



render () {
    return (
        <div>
            <input type = 'text'
            onClick={this.updateInput}>
            </input>
            <Button onClick = {this.submitForm}>Add</Button>
            <Slider onChange = {this.updatePrice}></Slider>

           
        </div>

    )
    }
}

export default Add 