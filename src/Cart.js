import React, { Component } from 'react'
import Footer from './COMPONENTS/Footer'
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

        this.clearCartVal = this.clearCartVal.bind(this);
    }

    clearCartVal = () => {
        localStorage.setItem('cartValue', '')


    }

    render() {

        const { classes } = this.props;
        return (
            <div>

                <Container fixed maxWidth="xl" className={classes.root, "cart-container"} >
                    <div className="cart-box">

                        <button onClick={this.clearCartVal}>Check Out</button>

                    </div>

                </Container>
            </div>
        )
    }
}

export default withStyles(styles)(Cart);
