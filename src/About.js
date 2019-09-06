import React, { Component } from 'react'
import { Container, Grid } from '@material-ui/core'
import './CSS/About.css'
import Nav from './COMPONENTS/Nav'
import Footer from './COMPONENTS/Footer'


export class About extends Component {
    render() {
        return (
            <div>
                <Nav />

                <Container>
                    <Grid container>

                        <Grid className="about-col" item md={6}>
                            <h2>Section 1</h2>
                        </Grid>

                        <Grid className="about-col" item md={6}>
                            <h2>Section 2</h2>
                        </Grid>
                    </Grid>

                </Container>

                <Footer />

            </div>
        )
    }
}

export default About
