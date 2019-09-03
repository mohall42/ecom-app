import React, { Component } from 'react'
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
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item lg={4}>
                        <h2>Item here</h2>
                    </Grid>
                    <Grid item lg={4}>
                        <h2>Item here</h2>
                    </Grid>
                    <Grid item lg={4}>
                        <h2>Item here</h2>
                    </Grid>


                </Grid>

            </div>
        )
    }
}

export default withStyles(styles)(Items)
