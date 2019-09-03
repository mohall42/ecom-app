import React, { Component } from 'react';
import './CSS/App.css';
import Nav from './COMPONENTS/Nav'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cartItems: 10,
    }
  }


  render() {


    return (
      <div>
        <Nav cartItems={this.state.cartItems} />

      </div>
    );

  }
}

export default App;
