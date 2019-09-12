import React, { Component } from 'react';
import Nav from './COMPONENTS/Nav'
import Footer from './COMPONENTS/Footer'
import { Transition, TransitionGroup } from "react-transition-group";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { play, exit } from './TIMELINES/timelines.js'
import './CSS/index.css';
import Main from './Main';
import Cart from './Cart';
import About from './About';




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
            <Router>

                <Nav badgeValue={this.state.cartValue} />
                <Route render={({ location }) => {
                    const { pathname, key } = location;

                    return (
                        <TransitionGroup component={null}>
                            <Transition
                                key={key}
                                appear={true}
                                onEnter={(node, appears) => play(pathname, node, appears)}
                                onExit={(node, appears) => exit(node, appears)}
                                timeout={{ enter: 750, exit: 150 }}
                            >
                                <Switch location={location}>
                                    <Route
                                        path="/"
                                        exact
                                        render={() => <Main updateCartVal={this.updateCartVal} />} />
                                    <Route path="/cart" exact component={Cart} />
                                    <Route path="/about" exact component={About} />
                                </Switch>
                            </Transition>
                        </TransitionGroup>
                    )
                }} />
                <Footer />





            </Router>


        )

    }


    /*  return (
 
         <Router>
             <Route path="/" exact component={Main} />
             <Route path="/cart" exact component={Cart} />
             <Route path="/about" exact component={About} />
         </Router>
     ) */
}

export default App
