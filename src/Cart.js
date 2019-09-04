import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container'
import './CSS/Cart.css'

const styles = {
    root: {
      border: 1,
      borderRadius: 3,
    },
};

export class Cart extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {

        const {classes} = this.props;
        return (
            <div>
                <Container fixed className= {classes.root}>
                    <p>Youre in the cart</p>
                </Container>
                
            </div>
        )
    }
}

export default withStyles(styles)(Cart);
