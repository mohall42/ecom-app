import React, { Component } from 'react'
import Nav from './COMPONENTS/Nav'
import Items from './COMPONENTS/Items'
import Footer from './COMPONENTS/Footer'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cartItems: localStorage.getItem("cart"),
    }

    this.updateCart = this.updateCart.bind(this);
  }

    /* componentDidMount(){
     
      const notNull = localStorage.getItem("cart") === "true";
      const value = notNull ? localStorage.getItem("cart") : 0;

      this.setState({cartItems: value});
      localStorage.setItem('cartItems', value);
    } */

    updateCart = () => {
      let cartItems = localStorage.getItem('cartItems')
      cartItems++;
      localStorage.setItem('cartItems', cartItems);
      this.setState({cartItems: cartItems});

    }
    
    render() {
      
      

    return (
      <div>
        <Nav cartItems={this.state.cartItems} />

        <Items updateCart={this.updateCart} />

        <Footer />

      </div>
    );

  }
}

export default App;
