import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './CSS/index.css';
import Main from './Main';
import Cart from './Cart';
import About from './About';



function App() {
    return (

        <Router>
            <Route path="/" exact component={Main} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/about" exact component={About} />
        </Router>
    )
}

export default App
