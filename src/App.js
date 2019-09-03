import React, { Component } from 'react'

import './CSS/App.css';
import Nav from './COMPONENTS/Nav'
import Items from './COMPONENTS/Items'
import Back from "./IMAGES/Back.svg";

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
        <div className="back">

          <img src={Back} alt="Back" />

        </div>
        <div className="content">

          <Items />

        </div>

        <div className="addBox">
          <h2>Add item button here</h2>
        </div>
      </div>
    );

  }
}

export default App;
