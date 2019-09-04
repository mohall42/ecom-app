import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './CSS/index.css';
import Main from './Main';
import Cart from './Cart';



function App() {
    return(

        <Router>
            <Route path="/" exact  component={Main}/>
            <Route path="/cart" exact  component={Cart}/>
         </Router>
    )
}

export default App
    