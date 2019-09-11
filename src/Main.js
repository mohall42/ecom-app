import React, { Component } from 'react'
import Nav from './COMPONENTS/Nav'
import Items from './COMPONENTS/Items'
import Footer from './COMPONENTS/Footer'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cartValue: localStorage.getItem('cartValue'),


    }

    this.updateCartVal = this.updateCartVal.bind(this);
  }



  updateCartVal = () => {
    let cartValue = localStorage.getItem('cartValue');
    cartValue++;
    localStorage.setItem('cartValue', cartValue);
    this.setState({ cartValue: cartValue });

  }

  render() {


    return (

      <div>
        <Nav cartItems={this.state.cartItems} />

        <Items updateCartVal={this.updateCartVal} />

        <Footer />

      </div>
    );

  }
}

export default App;
