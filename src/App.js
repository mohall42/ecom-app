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



    render() {
        return (
            <Router>

                <Nav />
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



}

export default App
