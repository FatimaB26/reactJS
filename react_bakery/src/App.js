import React, { Component } from 'react';
import './App.css';
import '../src/css/bootstrap.min.css'
import Button from './components/core/Button';
import Add from './components/Add'
import List from './components/List'
import Pay from './components/Pay'

class App extends Component {

  constructor() {
    super(); 
    this.onClickTabAdd = this.onClickTabAdd.bind(this);
    this.onClickTabList = this.onClickTabList.bind(this);
    this.onClickTabPay = this.onClickTabPay.bind(this);
    this.state = { 
      activeTab: 'add',
      items: []
    }}

    onClickTabAdd() {
      console.log ('addClick')
      this.setState({
        activeTab: 'add'
      })
    }

    onClickTabList() {
      console.log ('listClick')
        this.setState({
          activeTab: 'list'
        })
    }

    onClickTabPay() {
      console.log ('payClick')
        this.setState({
          activeTab: 'pay'
        })
    }

    addItem (price,input) {

    }

  renderAffichage() {
    switch(this.state.activeTab) {
      case 'add':
        return <Add></Add>;
      case 'list':
        return <List></List>;
      case 'pay':
        return <Pay></Pay>;
      default:
        return (<h1>Rien</h1>)
    }
}

  render() {
    return (
      <div>
        <Button isSelected = {this.state.activeTab === 'add'}
                onClick = {this.onClickTabAdd} >Add</Button>
        <Button isSelected={this.state.activeTab === 'list'}
                onClick = {this.onClickTabList} >List</Button>
        <Button isSelected={this.state.activeTab === 'pay'}
                onClick = {this.onClickTabPay}>Pay</Button>

          {this.renderAffichage()}

      </div>
      
    );
  } 
}

export default App
