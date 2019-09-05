import React, { Component } from 'react'
import '../CSS/Items.css'
import Watch from '../IMAGES/Watch.png'
import ColorPicker from './ColorPicker'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'


const styles = theme => ({
    root: {
        flexGrow: 1,

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});


export class Items extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {



        const { classes } = this.props;

        return (
            <div className="item-container">


                <div className={classes.root}>
                    <Grid container alignContent="center" spacing={1}>
                        <Grid item lg={1}>

                            <Grid container direction='column'>
                                <h2>Item here</h2>
                            </Grid>

                        </Grid>
                        <Grid item ali="center" lg={7}>
                            <img src={Watch} alt="watch" />
                        </Grid>
                        <Grid item lg={4}>

                            <Grid container direction='column' >
                                <Grid item lg={4}>
                                    <ColorPicker />



                                </Grid>
                                <Grid item lg={4}>

                                    <h2>Item here</h2>


                                </Grid>
                                <Grid item lg={4}>


                                    <button className="addBtn"> <h2>Add to Cart</h2> </button>





                                </Grid>
                            </Grid>
                        </Grid>


                    </Grid>

                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Items)
