import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import footer from '../CSS/Footer.css'
import { Grid } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


function Footer(props) {
    const classes = useStyles();

    return (
        <div className="footer-main">

            <div className="footer-body">
                <Grid container spacing={2}>
                    <Grid item sm={3} xs={12}>
                        <p>Footer text here</p>
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <p>Footer text here</p>
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <p>Footer text here</p>
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <p>Footer text here</p>
                    </Grid>

                </Grid>

            </div>

        </div>
    )

}

export default Footer
