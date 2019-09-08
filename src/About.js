import React, { Component } from 'react'
import { Container } from '@material-ui/core'
import './CSS/About.css'
import Nav from './COMPONENTS/Nav'
import Footer from './COMPONENTS/Footer'


export class About extends Component {
    render() {
        return (
            <div>
                <Nav />

                <Container fixed maxWidth="xl" className="about-container">
                    <div className="learn-more">
                        <h2>Learn More</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Sunt minima commodi ut aperiam at iusto accusamus veniam officia,
                        animi distinctio libero omnis sed quod tenetur amet quis non pariatur quasi!</p>
                    </div>

                    <div className="our-mission">
                        <h2>Our Mission</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Sunt minima commodi ut aperiam at iusto accusamus veniam officia,
                        animi distinctio libero omnis sed quod tenetur amet quis non pariatur quasi!</p>
                    </div>



                </Container>

                <Footer />

            </div>
        )
    }
}

export default About
