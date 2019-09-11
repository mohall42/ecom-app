import React, { Component } from 'react';
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

                <Route render={({ location }) => {
                    const { pathname, key } = location

                    return (
                        <TransitionGroup component={null}>
                            <Transition
                                key={key}
                                appear={true}
                                onEnter={(node, appears) => play(pathname, node, appears)}
                                timeout={{ enter: 750, exit: 0 }}
                            >
                                <Switch location={location}>
                                    <Route path="/" exact component={Main} />
                                    <Route path="/cart" exact component={Cart} />
                                    <Route path="/about" exact component={About} />
                                </Switch>
                            </Transition>
                        </TransitionGroup>
                    )
                }} />


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
