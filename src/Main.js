import React, { Component } from 'react'
import './CSS/Main.css';
import Nav from './COMPONENTS/Nav'
import Items from './COMPONENTS/Items'
import Footer from './COMPONENTS/Footer'

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

        <Items />

        <Footer />

      </div>
    );

  }
}

export default App;
