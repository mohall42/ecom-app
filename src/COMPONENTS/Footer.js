import React from 'react'
import '../CSS/Footer.css'
import { Grid } from '@material-ui/core'




function Footer(props) {

    return (
        <div className="footer-main">

            <div className="footer-body">
                <Grid container spacing={2}>
                    <Grid className="ft-col" item sm={6} md={3} xs={12}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Rerum ab iure dolor fuga,
                        suscipit rem minus quae expedita omnis ducimus. </p>
                    </Grid>
                    <Grid className="ft-col" item sm={6} md={3} xs={12}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum ab iure dolor fuga,
                        suscipit rem minus quae expedita omnis ducimus. </p>
                    </Grid>
                    <Grid className="ft-col" item sm={6} md={3} xs={12}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Rerum ab iure dolor fuga,
                        suscipit rem minus quae expedita omnis ducimus. </p>
                    </Grid>
                    <Grid className="ft-col" item sm={6} md={3} xs={12}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Rerum ab iure dolor fuga,
                        suscipit rem minus quae expedita omnis ducimus. </p>
                    </Grid>

                </Grid>

            </div>

        </div>
    )

}

export default Footer
